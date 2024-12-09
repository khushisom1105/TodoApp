export default function Tab({ tabData, field, setField }:any) {
    return (
        <div
            style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="flex font-bold bg-[#9694FF] p-1 gap-x-1 my-6 rounded-full max-w-max"
        >
            {tabData.map((tab:any) => (
                <button
                    key={tab.id}
                    onClick={() => setField(tab.type)}
                    className={`${field === tab.type
                            ? "bg-[#3D3BF3] text-[#EBEAFF]"
                            : "bg-transparent text-[#EBEAFF]"
                        } py-2 px-5 rounded-full transition-all duration-200`}
                >
                    {tab?.tabName}
                </button>
            ))}
        </div>
    );
}