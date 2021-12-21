import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x73459f118e33ccB14008469BDaD6E99F78127c48",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "LoL DAO NFT token",
        description: "This NFT will give you access to the LoLDAO!",
        image: readFileSync("scripts/assets/loopring.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()