import {wbApiClient} from "@/fsd/shared/config/wb-api-client";
import {ANALITICS_BASE_URL, NmReportPaths} from "./nm-report.paths";
import {NMReportDetailRequest} from "./types/nm-report-detail-request.types";


export const getNMReportDetail = async (request: NMReportDetailRequest) => {
  const response =
    await wbApiClient.post(`${ANALITICS_BASE_URL}${NmReportPaths.NM_REPORT_DETAIL}`,request)
  return response.data.data
}
