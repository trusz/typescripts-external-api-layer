export type StringDate = string

export function DateFromStringDate(strDate: StringDate): Date{
    return new Date(strDate)
}