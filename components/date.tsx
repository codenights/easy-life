import { NextPage } from 'next'
import { parseISO, format } from 'date-fns'

const Date: NextPage<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date
