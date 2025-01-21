// import type { NextApiRequest, NextApiResponse } from 'next';
// import ServicesData from '../../components/Services/ServicesData';
// import { Service } from '../../types/services';

// export default function handler(req: NextApiRequest, res: NextApiResponse<Service[]>) {
//   res.status(200).json(ServicesData);
// }


// pages/api/services.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import ServicesData from '../../components/Services/ServicesData';
// import { Service } from '../../types/services';

// export default function handler(req: NextApiRequest, res: NextApiResponse<Service[]>) {
//   const servicesWithSlug = ServicesData.map((service) => ({
//     ...service,
//     slug: service.id, // Use the id as the slug
//   }));

//   res.status(200).json(servicesWithSlug);
// }
