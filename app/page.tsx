import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline';



function HomePage() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">Amey ChatGPT</h1>

        <div className='flex space-x-2 text-center'>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className="h-8 w-8" />
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Explain Quantum Computing In Simple Terms"</p>
                    <p className="infoText">"Can you tell me about that Noob Developer Amey Who owns a Stupid Youtube Channel?"</p>
                    <p className="infoText">"Explain Ray Marching with Signed Distance Functions?"</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BoltIcon className="h-8 w-8" />
                    <h2>Capabilities</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Change the ChatGPT Model to use"</p>
                    <p className="infoText">"Messages are stored in Firebase's Firestore"</p>
                    <p className="infoText">"Capabilities and Strengths Even Your BoyFriend/GirlFriend does not have!"</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <ExclamationTriangleIcon className="h-8 w-8" />
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"May occasionally generate incorrect information"</p>
                    <p className="infoText">"May not get Your Stupid double Meaning References"</p>
                    <p className="infoText">"Limited knowledge of world and events after 2021"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage;