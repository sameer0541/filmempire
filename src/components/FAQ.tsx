import Cross from "./icons/cross"
import Tick from "./icons/tick"
import Details from "./ui/Details"

const Faq = () => {
  return (
    <>
    <Details title="What is Netflix?">
      <p className="p-3">Netflix is a popular streaming service that offers a vast library of movies, TV shows, documentaries, and original content.</p>
      </Details>
      <Details title="How much it Costs?">
        <div className="flex gap-10 ">
        <div className="md:flex-col gap-10 md:flex hidden">
            <div className="flex flex-col text-white">
              <p>&nbsp;</p>
              <h4>&nbsp;</h4>
            </div>
            <div className=" gap-2">
              <ul className="text-white list-none gap-2 flex flex-col items-start">
                <li className="text-neutral-100 mt-2">HD Available</li>
                <li className="text-neutral-100 mt-2">4k+HDR Available</li>
                <li className="text-neutral-100 mt-2">Multi Device Support</li>
                <li className="text-neutral-100 mt-2">Screens you can watch on at the same time?</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-7 mt-1 hover:border border-white rounded-xl p-2 box-border">
            <div className="flex flex-col text-white">
              <p>Basic</p>
              <h4>$7.99</h4>
            </div>
            <div className="gap-2">
              <ul className="text-white list-none gap-2 flex flex-col items-center">
                <li className="text-neutral-100 mt-2"><Tick/></li>
                <li className="text-neutral-100 mt-2"><Cross/></li>
                <li className="text-neutral-100 mt-2"><Cross/></li>
                <li className="text-neutral-100 mt-2">1</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-7 mt-1 hover:border border-white rounded-xl p-2 box-border">
            <div className="flex flex-col text-white">
              <p>Standard</p>
              <h4>$9.99</h4>
            </div>
            <div className="gap-2">
              <ul className="text-white list-none gap-2 flex flex-col items-center">
                <li className="text-neutral-100 mt-2"><Tick/></li>
                <li className="text-neutral-100 mt-2"><Tick/></li>
                <li className="text-neutral-100 mt-2"><Cross/></li>
                <li className="text-neutral-100 mt-2">2</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-7 mt-1 hover:border border-white rounded-xl p-2 box-border">
            <div className="flex flex-col text-white">
              <p>Premiun</p>
              <h4>$14.99</h4>
            </div>
            <div className="gap-2">
              <ul className="text-white list-none gap-2 flex flex-col items-center">
                <li className="text-neutral-100 mt-2"><Tick/></li>
                <li className="text-neutral-100 mt-2"><Tick/></li>
                <li className="text-neutral-100 mt-2"><Tick/></li>
                <li className="text-neutral-100 mt-2">4</li>
              </ul>
            </div>
          </div>
        </div>
      </Details>
      <Details title="Where can i Watch?">
        <p className="p-2 gap-1">Netflix is a popular streaming service that offers a vast library of movies, TV shows, documentaries, and original content.</p>
      </Details>
    </>
  )
}

export default Faq
