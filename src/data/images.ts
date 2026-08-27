import nature from "@/assets/world-nature.jpg";
import science from "@/assets/world-science.jpg";
import hydration from "@/assets/world-hydration.jpg";
import hair from "@/assets/world-hair.jpg";
import makeup from "@/assets/world-makeup.jpg";
import night from "@/assets/world-night.jpg";
import men from "@/assets/world-men.jpg";
import derm from "@/assets/world-derm.jpg";
import baby from "@/assets/world-baby.jpg";

import meRiceFacewash from "@/assets/prod-rice-facewash.jpg";
import meRosemaryShampoo from "@/assets/prod-rosemary-shampoo.jpg";
import meUbtanFacewash from "@/assets/prod-ubtan-facewash.jpg";
import meLemonShampoo from "@/assets/prod-lemon-shampoo.jpg";
import tdcSalicylicSerum from "@/assets/prod-salicylic-serum.jpg";
import tdcNiacinamideSerum from "@/assets/prod-niacinamide-serum.jpg";
import aqGlowSunscreen from "@/assets/prod-glow-sunscreen.jpg";
import aqHydrateGel from "@/assets/prod-hydrate-gel.jpg";
import dsHaldiVitcSerum from "@/assets/prod-haldi-vitc-serum.jpg";
import bbIntenseShampoo from "@/assets/prod-intense-shampoo.jpg";
import meOnionHairoil from "@/assets/prod-onion-hairoil.jpg";
import stLiquidLip from "@/assets/prod-liquid-lip.jpg";
import luNightRepair from "@/assets/prod-night-repair.jpg";

export const imageMap: Record<string, string> = {
  nature,
  science,
  hydration,
  hair,
  makeup,
  night,
  men,
  derm,
  baby,
  "me-rice-facewash": meRiceFacewash,
  "me-rosemary-shampoo": meRosemaryShampoo,
  "me-ubtan-facewash": meUbtanFacewash,
  "me-lemon-shampoo": meLemonShampoo,
  "tdc-salicylic-serum": tdcSalicylicSerum,
  "tdc-niacinamide-serum": tdcNiacinamideSerum,
  "aq-glow-sunscreen": aqGlowSunscreen,
  "aq-hydrate-gel": aqHydrateGel,
  "ds-haldi-vitc-serum": dsHaldiVitcSerum,
  "bb-intense-shampoo": bbIntenseShampoo,
  "me-onion-hairoil": meOnionHairoil,
  "st-liquid-lip": stLiquidLip,
  "lu-night-repair": luNightRepair,
};

export const productImage = (key: string) => imageMap[key] ?? nature;
