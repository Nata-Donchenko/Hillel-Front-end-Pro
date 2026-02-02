
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export function getTime(deadline) {
  const now = dayjs()
  const end = dayjs(deadline)

  const diff = end.diff(now)

  if (diff <= 0) {
    return 'Time is over'
  }

  const duration = dayjs.duration(diff)

  const days = String(Math.floor(duration.asDays())).padStart(2, '0')
  const hours = String(duration.hours()).padStart(2,'0')
  const minutes = String(duration.minutes()).padStart(2,'0')
  const seconds = String(duration.seconds()).padStart(2,'0')

  return `Deadline: ${days} days, ${hours}:${minutes}:${seconds}`
}

export function updateTimers() {
  const timers = document.querySelectorAll('.todoDeadline')

  timers.forEach(item => {
    const deadline = item.dataset.deadline
    item.textContent = getTime(deadline)
  })
}