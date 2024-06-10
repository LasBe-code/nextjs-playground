import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json({ message: "GET request to the data route" });
}
