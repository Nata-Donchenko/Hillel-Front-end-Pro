import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
export function getTime(deadline) {
  var now = dayjs();
  var end = dayjs(deadline);
  var diff = end.diff(now);
  if (diff <= 0) {
    return 'Time is over';
  }
  var duration = dayjs.duration(diff);
  var days = String(Math.floor(duration.asDays())).padStart(2, '0');
  var hours = String(duration.hours()).padStart(2, '0');
  var minutes = String(duration.minutes()).padStart(2, '0');
  var seconds = String(duration.seconds()).padStart(2, '0');
  return "Deadline: ".concat(days, " days, ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
export function updateTimers() {
  var timers = document.querySelectorAll('.todoDeadline');
  timers.forEach(function (item) {
    var deadline = item.dataset.deadline;
    item.textContent = getTime(deadline);
  });
}