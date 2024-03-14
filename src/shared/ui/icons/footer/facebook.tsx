import Link from "next/link";

export default function Facebook() {
  return (
    <Link className="hover:text-opacity-70 transition-all" href='https://www.facebook.com/'>
      <svg className="hover:text-opacity-70 transition-all" xmlns="http://www.w3.org/2000/svg" width="54" height="53" viewBox="0 0 54 53" fill="none">
        <path d="M53.0719 26.5664C53.0719 11.9018 41.1999 0 26.5719 0C11.9439 0 0.0718689 11.9018 0.0718689 26.5664C0.0718689 39.4246 9.18787 50.1308 21.2719 52.6015V34.5363H15.9719V26.5664H21.2719V19.9248C21.2719 14.7975 25.4324 10.6266 30.5469 10.6266H37.1719V18.5965H31.8719C30.4144 18.5965 29.2219 19.792 29.2219 21.2531V26.5664H37.1719V34.5363H29.2219V53C42.6044 51.6717 53.0719 40.3544 53.0719 26.5664Z" fill="#F5ECDC"/>
      </svg>
    </Link>
  )
}