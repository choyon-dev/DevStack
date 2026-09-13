import Logo from "../../assets/logo-text.png";
import type { MobileDrawerProps } from "../../types/Types";

export default function MobileDrawer({
  isOpen,
  onClose,
  selectedStacks,
  onRemoveFromStack,
  onRemoveAll,
}: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-[320px] max-w-[85vw] h-full bg-white p-5 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
            <img src={Logo} alt="DevStack logo" className="h-6 object-contain" />
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-black text-lg font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>


          <div className="pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-neutral-900">Your Stack</h3>
              <span className="text-xs bg-[#fbe8f2] text-[#D73387] px-2 py-0.5 rounded-full font-medium">
                {selectedStacks.length}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              {selectedStacks.length} Technology Selected
            </p>

            {selectedStacks.length === 0 ? (
              <div className="mt-4 text-center py-8 text-neutral-400 text-xs border-2 border-dashed border-neutral-200 rounded-xl">
                No technologies selected yet.
              </div>
            ) : (
              <div className="flex flex-col gap-2.5 mt-4 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {selectedStacks.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200/70 rounded-xl"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-neutral-900">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-neutral-400">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromStack(item)}
                      className="text-neutral-400 hover:text-red-500 text-xs font-bold p-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {selectedStacks.length > 0 && (
          <div className="pt-4 border-t border-neutral-100 mt-4">
            <button
              onClick={onRemoveAll}
              className="w-full py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl text-xs font-medium transition cursor-pointer"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
