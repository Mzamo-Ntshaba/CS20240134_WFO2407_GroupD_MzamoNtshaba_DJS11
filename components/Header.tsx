export default function Header() {
    return (
        <div
            data-ref="header"
            className="flex w-screen bg-lime-500 h-20 fixed z-40">
            <img
                src="../podcast.png"
                className="h-3/4 mt-auto mb-auto ml-24 "
            />
            <h1 className="text-blue-700 font-semibold text-3xl mt-auto mb-auto ml-2">
                VoiceDeck
            </h1>
        </div>
    )
}
