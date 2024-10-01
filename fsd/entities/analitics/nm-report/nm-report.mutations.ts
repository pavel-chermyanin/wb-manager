import {useMutation} from "@tanstack/react-query";
import {getNMReportDetail} from "./nm-report.actions";
import {NmReportResponse} from "./types/nm-report-response.types";

export const useNMReportDetailMutation = () => {
  return useMutation({
    mutationFn: getNMReportDetail,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      // возвращаем ошибку если надо
    },
  });
};