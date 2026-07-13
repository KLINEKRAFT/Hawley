export type Piece = { name: string; material: string; image: string; alt: string };
export type Group = { category: string; note: string; pieces: Piece[] };

export const groups: Group[] = [
  {
    category: "Dining Tables",
    note: "Any size, any wood, made to fit the room.",
    pieces: [
      { name: "Root Dining Table", material: "Solid walnut root base · glass top", image: "hero-root-table.jpg", alt: "Dining table with a sculptural solid-walnut root base and glass top" },
      { name: "Racetrack Dining Table", material: "Solid walnut", image: "commission-racetrack.jpg", alt: "Walnut racetrack-edge dining table with leather chairs" },
      { name: "Oval Dining Table", material: "Solid walnut", image: "dining-oval.jpg", alt: "Walnut oval dining table on a pedestal base" },
      { name: "Chinquapin Oak Table", material: "Single live-edge slab", image: "slab-oak.jpg", alt: "Dining table with a live-edge chinquapin oak slab top" },
      { name: "W-Base Dining Table", material: "Walnut & steel", image: "dining-wbase.jpg", alt: "Dining table with a sculptural W-shaped base and glass top" },
      { name: "Thinscape Oval Table", material: "Thinscape top · walnut base", image: "dining-thinscape.jpg", alt: "Oval dining table with a thin stone-look top" },
    ],
  },
  {
    category: "Consoles & Sideboards",
    note: "Storage that reads as a piece of furniture, not a box.",
    pieces: [
      { name: "Walnut Sideboard", material: "Solid black walnut · bronze top", image: "sideboard-walnut.jpg", alt: "Long low sideboard in solid black walnut" },
      { name: "Macassar Console", material: "Figured Macassar ebony", image: "console-macassar.jpg", alt: "Console table in figured Macassar ebony" },
      { name: "Wood Block Console", material: "Solid walnut", image: "console-woodblock.jpg", alt: "Console with a stacked solid-walnut block base" },
      { name: "Wall-Mounted Sideboard", material: "Walnut · floating", image: "sideboard-wallmount.jpg", alt: "Floating wall-mounted walnut sideboard" },
    ],
  },
  {
    category: "Cabinets & Storage",
    note: "Book-matched fronts and hand-fit doors.",
    pieces: [
      { name: "Burl-Front Cabinet", material: "Book-matched burl", image: "cabinet-burl.jpg", alt: "Cabinet with a book-matched burl front and dark case" },
      { name: "Burl-Front Cabinet II", material: "Book-matched burl", image: "cabinet-burl2.jpg", alt: "Second burl-front cabinet design" },
      { name: "Custom Burl Cabinet", material: "Burl & lacquer", image: "cabinet-burlcab.jpg", alt: "Custom burl cabinet with lacquer case" },
      { name: "Custom Cabinet", material: "Walnut", image: "cabinet-custom.jpg", alt: "Custom walnut cabinet" },
    ],
  },
  {
    category: "Bedroom",
    note: "Beds and nightstands built as a set, or one at a time.",
    pieces: [
      { name: "Tufted Bed", material: "Hand-upholstered", image: "bed-tufted.jpg", alt: "Grey hand-tufted upholstered bed" },
      { name: "Tufted Storage Bed", material: "Upholstered · with storage", image: "bed-storage.jpg", alt: "Upholstered storage bed with drawers" },
      { name: "Koa Nightstand", material: "Hawaiian koa", image: "nightstand-koa.jpg", alt: "Nightstand in figured Hawaiian koa" },
      { name: "Piano-Finish Nightstands", material: "Hand-rubbed lacquer", image: "nightstand-piano.jpg", alt: "Pair of piano-finish lacquer nightstands" },
      { name: "Oval Nightstands", material: "Figured wood", image: "nightstand-oval.jpg", alt: "Pair of oval figured-wood nightstands" },
    ],
  },
  {
    category: "Seating",
    note: "The finest in leather, and Mark's own chair designs.",
    pieces: [
      { name: "Cube Chair", material: "Burl & leather", image: "chair-cube.jpg", alt: "Sculptural cube armchair in burl and black leather" },
      { name: "Burl Armchair", material: "Burl & leather", image: "chair-burl.jpg", alt: "Armchair with burl frame and leather seat" },
      { name: "Swivel Chairs", material: "White leather", image: "chair-swivel-white.jpg", alt: "Pair of white leather swivel chairs" },
      { name: "Swivel Chairs", material: "Grey leather", image: "chair-swivel-grey.jpg", alt: "Pair of grey leather swivel chairs" },
      { name: "Walnut Bench", material: "Solid walnut", image: "bench-walnut.jpg", alt: "Solid walnut bench" },
    ],
  },
];
