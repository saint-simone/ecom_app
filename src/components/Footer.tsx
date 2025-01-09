import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Help Section */}
        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>Chat with us</li>
            <li>1-888-203-9944</li>
            <li>1-888-204-9056 (Text)</li>
            <li>Email: help@allbirds.com</li>
            <li>
              <Link href="/returns-exchanges">Returns/Exchanges</Link>
            </li>
            <li>
              <Link href="/faq-contact">FAQ/Contact Us</Link>
            </li>
            <li>
              <Link href="/afterpay">Afterpay</Link>
            </li>
          </ul>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="font-bold mb-4">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shop/mens-shoes">Men&apos;s Shoes</Link>
            </li>
            <li>
              <Link href="/shop/womens-shoes">Women&apos;s Shoes</Link>
            </li>
            <li>
              <Link href="/shop/mens-apparel">Men&apos;s Apparel</Link>
            </li>
            <li>
              <Link href="/shop/womens-apparel">Women&apos;s Apparel</Link>
            </li>
            <li>
              <Link href="/shop/socks">Socks</Link>
            </li>
            <li>
              <Link href="/shop/gift-cards">Gift Cards</Link>
            </li>
            <li>
              <Link href="/refer-a-friend">Refer a Friend</Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/our-stores">Our Stores</Link>
            </li>
            <li>
              <Link href="/our-story">Our Story</Link>
            </li>
            <li>
              <Link href="/our-materials">Our Materials</Link>
            </li>
            <li>
              <Link href="/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link href="/investors">Investors</Link>
            </li>
            <li>
              <Link href="/shoe-care">Shoe Care</Link>
            </li>
            <li>
              <Link href="/affiliates">Affiliates</Link>
            </li>
            <li>
              <Link href="/bulk-orders">Bulk Orders</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/press">Press</Link>
            </li>
            <li>
              <Link href="/community-offers">Community Offers</Link>
            </li>
            <li>
              <Link href="/blog">Our Blog</Link>
            </li>
            <li>
              <Link href="/patents">Patents</Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Certification */}
        <div>
          <h3 className="font-bold mb-4">FOLLOW THE FLOCK</h3>
          <p className="text-sm mb-4">
            Exclusive offers, hands-up on new things, and sightings of Allbirds in the wild.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.tiktok.com" aria-label="TikTok">
            <FaTiktok />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter">
            <FaSquareXTwitter />
            </Link>
            <Link href="https://www.facebook.com" aria-label="Facebook">
            <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram />            
            </Link>
            <Link href="https://www.youtube.com" aria-label="YouTube">
            <FaYoutube />
            </Link>
          </div>
          <div className="mt-6">
            <Image
              src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg"
              alt="Certified B Corporation"
              width={50}
              height={50}
              className="w-12"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        <p>
          © Allbirds, {new Date().getFullYear()}, Inc. All Rights Reserved.{' '}
          <Link href="/terms" className="underline">Terms, Privacy & Accessibility</Link>
        </p>
        <p className="mt-2">
          <Link href="/do-not-sell" className="underline">Do Not Sell My Personal Information</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;