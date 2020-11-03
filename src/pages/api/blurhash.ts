import { NextApiRequest, NextApiResponse } from "next";
import { getBlurhash } from "next-blurhash";

const hashes = {
  header: "/favicon-128x128.png",
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const hash = await getBlurhash(hashes.header);
  res.status(200).json({ hash });
};
