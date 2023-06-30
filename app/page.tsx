import Link from "next/link";

export default function Home() {


  return (
    <div className="w-full max-w-[1200px] mx-auto mt-12">
      <h3 className="text-2xl mb-6">
        It{"\'"}s usually 2AM
      </h3>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <img alt="moomin-cup" src="/moomin/1.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />
        <div className="flex hover:bg-gray-600 hover:text-green-100 transition duration-700 px-6">
          <Link className="m-auto" href="/boomer">
            <p className="text-lg">
              Idk, i got some cool stuff here i guess :/ feel free to look at around.
            </p>
            <p className="mt-4">
              oh, and if you don{"\'"}t like abstract stuff then just [click me] for the {"\""}professional{"\""} version instead.
            </p>
          </Link>
        </div>
        <img alt="moomin-cup" src="/moomin/2.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />

        <div className="flex hover:bg-gray-600 hover:text-green-100 transition duration-700 px-6">
          <p className="m-auto text-lg">
            You like code? want to see some cool coding stuff? sure... let me just finnish my nap first.
          </p>
        </div>
        <img alt="moomin-cup" src="/moomin/3.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />
        <div className="flex hover:bg-gray-600 hover:text-green-100 transition duration-700 px-6">
          <p className="m-auto text-lg">
            You know that one very basic song about if you just had one chance... i, i don{"\'"}t think i{"\'"}d take that one chance.
          </p>
        </div>


        <img alt="moomin-cup" src="/moomin/4.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />
        <div className="flex hover:bg-gray-600 hover:text-green-100 transition duration-700 px-6">
          <p className="m-auto text-lg">
            I want to reach out, but somehow i think that might just make everything worse.
          </p>
        </div>
        <img alt="moomin-cup" src="/moomin/5.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />

        <div className="flex hover:bg-gray-600 hover:text-green-100 transition duration-700 px-6">
          <p className="m-auto text-lg">
            The site isn{"\'"}t done yet. maybe it will be, one day.
          </p>
        </div>
        <img alt="moomin-cup" src="/moomin/6.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />
        <div className="flex hover:bg-gray-600 hover:text-green-100 transition duration-700 px-6">
          <p className="m-auto text-lg">
            I wonder if he still thinks of me
          </p>
        </div>

        <img alt="moomin-cup" src="/moomin/7.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />
        <div className="flex hover:bg-gray-600 hover:text-green-100 transition duration-700 px-6">
          <p className="m-auto text-lg">
            Wake me up in an hour or so, i... i just need a quick break
          </p>
        </div>
        <img alt="moomin-cup" src="/moomin/8.jpg" className="object-cover max-h-[400px] w-full filter grayscale transition hover:grayscale-0 duration-700" />
      </div>

    </div>
  )
}
