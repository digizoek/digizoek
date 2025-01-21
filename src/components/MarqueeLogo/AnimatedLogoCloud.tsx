const logos = [
  {
    name: 'snowboardingProfiles',
    url: '/images/partners-Logo/snowboardingProfiles.png',
  },
  {
    name: 'scholt-energy',
    url: '/images/partners-Logo/scholt-energy.png',
  },
  {
    name: 'chargeblock',
    url: '/images/partners-Logo/chargeblock.svg',
  },
  {
    name: 'Cointreau',
    url: '/images/partners-Logo/Cointreau.png',
  },
  {
    name: 'klug-touristik',
    url: '/images/partners-Logo/klug-touristik.png',
  },
  {
    name: 'artefy',
    url: '/images/partners-Logo/artefy.png',
  },
  {
    name: 'Digital-license-store',
    url: '/images/partners-Logo/Digital-license-store.png',
  },
  {
    name: 'Fenix',
    url: '/images/partners-Logo/Fenix.png',
  },
  {
    name: 'Noark',
    url: '/images/partners-Logo/Noark.svg',
  },
  {
    name: 'digitalkeystore24',
    url: '/images/partners-Logo/digitalkeystore24.png',
  },
  {
    name: 'CzechTourism',
    url: '/images/partners-Logo/CzechTourism.svg',
  },
  {
    name: 'covolt',
    url: '/images/partners-Logo/covolt.png',
  },
  {
    name: 'prague',
    url: '/images/partners-Logo/prague.png',
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, outerIndex) => (
              <div
                key={outerIndex} // Unique key for the outer div
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo) => (
                  <img
                    key={logo.name} // Unique key for each logo
                    src={logo.url}
                    className="h-12 w-35 px-2 brightness-0 hover:filter-none"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
