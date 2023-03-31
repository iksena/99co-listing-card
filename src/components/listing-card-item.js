import Image from 'next/image';
import { useState } from 'react';
import JsxParser from 'react-jsx-parser';

function TitleSection({
  title, address, project_type, year, ownership_type, availabilities_label,
}) {
  return (
    <div>
      <div className="flex flex-row items-center mb-3">
        <div className="rounded-xl bg-99-icon w-10 h-10 p-2 mr-3">
          <Image
            src="/building.svg"
            alt="Vercel Logo"
            width={40}
            height={40}
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-99-dark mb-1">{title}</h2>
          <p className="text-sm text-99-grey font-normal">{address}</p>
        </div>
      </div>
      <p className="text-base text-99-dark font-normal">
        {`${project_type} · ${year} · ${ownership_type}`}
      </p>
      <p className="text-base text-99-dark font-normal">
        {availabilities_label}
      </p>
    </div>
  );
}

function PriceSection({ psf_min, psf_max, subprice_label }) {
  const AmountFormatter = new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex flex-row md:flex-col text-right">
      <h3 className="text-lg font-semibold text-99-dark md:mb-1">
        {`${AmountFormatter.format(psf_min)} - ${AmountFormatter.format(psf_max)}`}
      </h3>
      <p className="text-sm text-99-grey font-normal self-center md:self-end ml-3">{subprice_label}</p>
    </div>
  );
}

function DescriptionButton({ onClick }) {
  return (
    <button
      className="text-base text-99-link font-semibold"
      type="button"
      onClick={onClick}
    >
      See description
    </button>
  );
}

function PhoneNumber({ number = '' }) {
  const [isRevealed, reveal] = useState(false);
  const firstFourNumber = String(number).substring(0, 4);

  return (
    <button
      className="text-base text-99-dark font-normal"
      onClick={() => reveal((prevReveal) => !prevReveal)}
      type="button"
    >
      {isRevealed ? number : `${firstFourNumber}XXXX`}
    </button>
  );
}

function Description({ children: description = '' }) {
  const pattern = /[3689]\d{1,3}\s?\d{4}/g;
  const jsx = description.replace(pattern, '<PhoneNumber number="$&" />');

  return (
    <span
      className="text-base text-99-dark font-normal whitespace-pre-wrap break-words"
    >
      <JsxParser
        components={{ PhoneNumber }}
        jsx={jsx}
        renderError={({ error }) => (<span>{error}</span>)}
      />
    </span>
  );
}

function ImageCard({ pic, title }) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={pic[0]}
        alt={title}
        className="object-cover rounded-t"
        width={544}
        height={272}
      />
      <div className="absolute top-1.5 left-0 z-10 bg-ribbon py-0.5 px-1 text-ribbon-text">
        <p className="text-xs font-semibold">LAUNCHING SOON</p>
      </div>
    </div>
  );
}

function ListingCardItem({ listingData }) {
  const [isDescriptionShown, showDescription] = useState(false);

  return (
    <div className="bg-white rounded shadow-2xl max-w-lg">
      <ImageCard {...listingData} />
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-1 md:basis-2/3 md:mb-4">
            <TitleSection {...listingData} />
          </div>
          <div className="basis-1 md:basis-1/3 mt-3 mb-3 md:mt-0">
            <PriceSection {...listingData} />
          </div>
        </div>
        <div className="flex flex-row justify-end">
          {isDescriptionShown
            ? <Description>{listingData.description}</Description>
            : <DescriptionButton onClick={() => showDescription(true)} />}
          <span className="sr-only">{listingData.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ListingCardItem;
