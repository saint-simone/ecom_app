import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const AllbirdsApproach: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          The Allbirds Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Wear-All-Day Comfort</h3>
            <p className="text-sm text-gray-600 mb-6">
              Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.
            </p>
            <Link href="/learn-more-comfort" className="text-black font-medium">
             <Button>Learn More</Button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Sustainability In Every Step</h3>
            <p className="text-sm text-gray-600 mb-6">
              From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.
            </p>
            <Link href="/learn-more-sustainability" className="text-black font-medium">
            <Button>Learn More</Button>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Materials From The Earth</h3>
            <p className="text-sm text-gray-600 mb-6">
              We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.
            </p>
            <Link href="/learn-more-materials" className="text-black font-medium">
            <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllbirdsApproach;
