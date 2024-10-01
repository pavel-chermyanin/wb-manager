import {CustomDatePicker} from "@/fsd/shared/ui/custom-date-picker";
import {CustomText} from "@/fsd/shared/ui/custom-text";


export const FilterIncomes = () => {
  return (
    <div>
      <CustomText>Дата от</CustomText>
      <CustomDatePicker name={'dateFrom'}/>
    </div>
  )
}