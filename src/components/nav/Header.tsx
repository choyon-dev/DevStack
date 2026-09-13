import { useState } from "react";
import { DeskHeader } from "./DeskHeader";
import { MobileHeader } from "./MobileHeader";
import { TabHeader } from "./TabHeader";
import MobileDrawer from "./MobileDrawer";
import type { HeaderProps } from "../../types/Types";

export function Header({
  selectedStacks,
  onRemoveFromStack,
  onRemoveAll,
}: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="hidden lg:block">
        <DeskHeader />
      </div>
      <div className="hidden md:block lg:hidden">
        <TabHeader
          onOpenDrawer={() => setIsDrawerOpen(true)}
          selectedCount={selectedStacks.length}
        />
      </div>
      <div className="md:hidden block">
        <MobileHeader
          onOpenDrawer={() => setIsDrawerOpen(true)}
          selectedCount={selectedStacks.length}
        />
      </div>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedStacks={selectedStacks}
        onRemoveFromStack={onRemoveFromStack}
        onRemoveAll={onRemoveAll}
      />
    </header>
  );
}