import cl from "classnames";
import React from "react";
import {useFormContext, Controller} from "react-hook-form";
import {DatePicker, InputGroup} from "rsuite";


// Интерфейс для пропсов DatePickerRhf
type CustomDatePickerProps = {
  name: string;
  placeholder?: string;
  className?: string;
  after?: () => React.ReactNode;
};

export const CustomDatePicker: React.FC<CustomDatePickerProps> = (
  {
    name,
    placeholder,
    className,
    after,
  }
) => {
  // Используем контекст формы для доступа к управлению и ошибкам
  const {
    control,
    formState: {errors},
  } = useFormContext();

  // Приведение ошибки к строке
  const errorMessage =
    typeof errors[name]?.message === "string" ? errors[name]?.message : "";

  return (
    <div className={'w-60 mb-6'}>
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <InputGroup className={''}>
            <DatePicker

              {...field}
              value={field.value || null} // Для правильной работы с null значениями
              placeholder={placeholder}
              className={''}
              onChange={(value) => field.onChange(value)}
              oneTap // Опционально, если вы хотите выбирать дату в один клик
            />
            {after && after()}
          </InputGroup>
        )}
      />
      {/* Отображаем ошибку, если она есть */}
      {/*<div*/}
      {/*  className={cl(styles.inputError, {*/}
      {/*    [styles.hasError]: !!errorMessage,*/}
      {/*  })}*/}
      {/*>*/}
      {/*  {errorMessage}*/}
      {/*</div>*/}
    </div>
  );
};
