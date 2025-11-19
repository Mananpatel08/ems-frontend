"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Calendar, ChevronDown, Eye, Trash } from "lucide-react";
import { Input } from "../ui";
import { useGetForms } from "@/hooks/useForm";
import { Avatar } from "../ui/avatar";
import { formatDate } from "@/helpers/date";
import { useDebounce } from "use-debounce";
import { Pagination } from "../ui/pagination";
import { FilterDropdown } from "../user-list/filter-dropdown";
import { useRouter } from "next/navigation";

export default function FormTable() {
  const router = useRouter();
  const [params, setParams] = useState({
    page: 1,
    search: "",
    pageSize: 10,
    status: [] as string[],
  });
  const [debouncedSearch] = useDebounce(params.search, 300);
  const { data, isLoading } = useGetForms({
    ...params,
    search: debouncedSearch,
  });
  const forms = data?.data;
  const currentPage = params.page;
  const pageSize = data?.pagination.page_size || 10;
  const totalItems = data?.pagination.total_items || 0;

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  const handleChangePage = (direction: "next" | "prev", newPage: number) => {
    setParams((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const goToPage = (pageNum: number) => {
    setParams((prev) => ({ ...prev, page: pageNum }));
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200">
      {/* Search & Filters */}
      <div className="flex items-center justify-between p-5">
        {/* Search Box */}
        <div className="w-1/4">
          <Input
            name="search"
            type="text"
            placeholder="Search..."
            className="focus:border-gray-300"
            icon={<Search className="h-5 w-5" />}
          />
        </div>

        <FilterDropdown setParams={setParams} params={params} />
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-5 font-normal">FORM ID</th>
              <th className="py-3 px-5 font-normal">STATUS</th>
              <th className="py-3 px-5 font-normal">CURRENT STEP</th>
              <th className="py-3 px-5 font-normal">COMPLETED DATE</th>
              <th className="py-3 px-5 font-normal">ACTION</th>
            </tr>
          </thead>

          <tbody className="text-sm ">
            {isLoading
              ? Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-100 animate-pulse"
                    >
                      <td className="py-3 px-5">
                        <div className="h-4 w-40 bg-gray-200 rounded"></div>
                      </td>
                      <td className="py-3 px-5">
                        <div className="h-4 w-20 bg-gray-200 rounded"></div>
                      </td>

                      <td className="py-3 px-5">
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      </td>

                      <td className="py-3 px-5">
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      </td>
                      <td className="py-3 px-5">
                        <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                          <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                        </div>
                      </td>
                    </tr>
                  ))
              : forms?.map((form) => (
                  <tr
                    key={form.id}
                    className="border-b border-gray-100 bg-white hover:bg-gray-50"
                  >
                    <td className="py-3 px-5">
                      {form.form_number}
                      {/* <div className="flex items-center gap-2">
                                        <Avatar
                                            name={user.first_name}
                                            size={30}
                                            shape="circle"
                                        />
                                        {user.first_name}
                                    </div> */}
                    </td>
                    <td className="py-3 px-5">{form.status}</td>
                    <td className="py-3 px-5">{form.current_step}</td>
                    <td className="py-3 px-5">
                      {formatDate(form.completed_at ?? "")}
                    </td>
                    <td className="py-3 px-5 flex gap-3">
                      <button
                        onClick={() => router.push(`/forms/${form.id}`)}
                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-200"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-200">
                        <Trash className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-5 py-3">
        <p className="text-sm text-gray-600">
          {start} – {end} of {totalItems} entries
        </p>

        {(data?.pagination?.total_pages ?? 0) > 1 && (
          <Pagination
            page={currentPage}
            total={data?.pagination?.total_pages || 1}
            onPageChange={goToPage}
            handleChangePage={handleChangePage}
          />
        )}
      </div>
    </div>
  );
}
