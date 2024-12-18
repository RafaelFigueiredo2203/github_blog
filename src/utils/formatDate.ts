import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

// Configura o plugin e o idioma
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export const formatDate = (date: Date) => {
  return dayjs(date).fromNow()
}
