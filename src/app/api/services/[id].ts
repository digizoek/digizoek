// import { NextApiRequest, NextApiResponse } from "next";
// import ServicesData from '../../../components/Services/ServicesData';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;
//   const service = ServicesData.find((service) => service.id === id);

//   if (!service) {
//     return res.status(404).json({ message: "Service not found" });
//   }

//   res.status(200).json(service);
// }
