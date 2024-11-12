import { useRouteError } from 'react-router-dom'

export default function error() {
    const error = useRouteError()
    console.log(error);
  return (
    <div>error</div>
  )
}
