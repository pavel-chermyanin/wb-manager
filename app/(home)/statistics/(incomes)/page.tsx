'use client';
import {TableIncomes} from "@/fsd/widgets/statistics/table-incomes";
import {useGetIncomesQueries} from "@/fsd/entities/statistic";
import {Loader} from "rsuite";
import {FilterIncomes} from "@/fsd/features/statistics/filter-incomes";
import {FormProvider, useForm, useWatch} from "react-hook-form";
import moment from "moment";


export default function IncomesPage() {
  const methods = useForm({
    defaultValues: {
      dateFrom: new Date('2023-06-20')
    }
  })
  const watchedValues = useWatch({
    control: methods.control,
  });
  const {data, isFetching} =
    useGetIncomesQueries(moment(watchedValues.dateFrom).format('YYYY-MM-DD'));


  return (
    <div>
      <FormProvider {...methods}>
        <FilterIncomes/>
      </FormProvider>
      {isFetching ? <Loader/> : <TableIncomes data={data!}/>}

    </div>
  );
}
