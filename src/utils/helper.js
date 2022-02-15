import { formatDistanceToNowStrict } from 'date-fns'
import { format as formatJalali } from 'date-fns-jalali'
import { faIR } from 'date-fns/locale'

export const parseTimeStamp = (
    timestamp,
    hasTime,
    showHours
) => {
    const diff = parseInt(
        formatDistanceToNowStrict((timestamp) * 1000, {
            addSuffix: false,
            unit: 'day'
        })
    )
    if (showHours && diff < 1)
        return formatDistanceToNowStrict((timestamp) * 1000, {
            addSuffix: true,
            locale: faIR
        })

    if (timestamp) {

        return formatJalali(
            (timestamp) * 1000,
            hasTime ? 'hh:mm - yyyy/MM/dd' : 'yyyy/MM/dd'
        )
    } else {
        return '-'
    }
}