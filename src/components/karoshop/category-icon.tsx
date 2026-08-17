import {
  Activity,
  Baby,
  Flame,
  Footprints,
  Layers,
  Ruler,
  Shirt,
  Sparkle,
  Sparkles,
  Tag,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  shirt: Shirt,
  sparkle: Sparkle,
  sparkles: Sparkles,
  baby: Baby,
  layers: Layers,
  activity: Activity,
  ruler: Ruler,
  footprints: Footprints,
  flame: Flame,
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Tag;
  return <Icon className={className} />;
}
