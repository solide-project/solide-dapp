var CryptoJS = require("crypto-js");

import { ContractSchema } from "@/lib/schema";
import { MarkdownPlayground } from "@/components/main/client/contract-card/components/load-playground/markdown-playground";
import { generateUri } from "@/lib/utils/construct-link";
import { SolideIDESchema } from "@/lib/schema/contract";

const SECRET = 'solide'

function enc(plainText: string) {
  var b64 = CryptoJS.AES.encrypt(plainText, SECRET).toString();
  var e64 = CryptoJS.enc.Base64.parse(b64);
  var eHex = e64.toString(CryptoJS.enc.Hex);
  return eHex;
}

function dec(cipherText: string) {
  var reb64 = CryptoJS.enc.Hex.parse(cipherText);
  var bytes = reb64.toString(CryptoJS.enc.Base64);
  var decrypt = CryptoJS.AES.decrypt(bytes, SECRET);
  var plain = decrypt.toString(CryptoJS.enc.Utf8);
  return plain;
}

const pandoraERC404 = "53616c7465645f5f19ea532187e53bce0907536e2d3da77a1f338e4f6ec845d8675cd8989e186debee73067902dce99815ad9802713bd476977c9efe2599b6ca5f17577b3d16dba5241f06cd95be3a6b7acb6a83737393cab0faf65e939ddc846e3850b8c6e337732039e231272a1b1de301ae8594473bd828e7c9f868b10845adaaac7dbfb0d63de775745d0387f519f074048c1b8c47bc139d6d0dcd891527b0974164d495fde0b994cd350eee2cf425a2f9029daeadcd7991d5671d7188c43e1cf8e629b18c44f796a092208c7ca71b10d8abc88c1e177e1a7b405182a37a73b710289f78e6a38518c67174382366617ac8b49925bd88548d8d93522f888dc57b9dd71a0f78557b8a9eb496fc901c9cbb43f41da90e5bf0b9d2975c42424a7f8f85d398220533cb42bcef6eb5cab44da7104de6a0a5f2324cb527b897936cd4b26eea4c175a259caa2fa8d6ef22e40e811e6e8ee04c3e655026a57cb561a88a06704acca07852bb0113cf9394a172a8b4d92c493acbd5fc70c93c6f631b9d75c2aa5f69fbda37c2841aa690f3c84079b9940e81b574e7a1c5c99cc738084785a7083698c9746e0e60a995261b6923efa68208650dfc5cd5c912a632e12ee5b9fcaa88793d021d7692d9067a7e34dd948fd6c7c0f686558528ff4470cc7f3395e35441e5eb6193570e875a399717b15f3b845f6d03d18dab104c076b66ed01c53dfbbff8fa738148442469b05e7e1c067bef6ada0dd4ea0b9e5b2ed883e6b72e272d50f09ae28a708518828b778736235ae070258f9ab7be89fbe00bf4e99a542e9f1e6f11e54b037540ddd6d1f643cb1dd827b88eed15b4a614d0dbde92f989973bf490a2bd67887c6313cc48f30caf8fbca86fe1ed0ed51604877847826aa0477375eb0775b07e2414c9636a8dbbaee2a00c64e9481218b2605baa9de39e7c4484c5c34de9f71646fbe86bb516f05b0a9276b8c7d5e5dc504497d845a12ae7a61c084595a4330adca22a9294329700fb3e4f61801a839838e7d428f1bf354b150dadab394253111d4398218fc08e5ca3b84a9f844a6040017b116f3734b8"
const pandoraERC404Example = "53616c7465645f5f910a191dde0249a7cb28d83ff0ff480d2021ff62c736171c36a9f8c8334100a273900cdb79d3ee68a59643c30241760874237a7dbfa22ffa39de5f4954b95a7a588e8c81768b55a755552fabc702d2e66761d44b08b2c407ba7dde5593e6fb187bcb1c016567c699d59eef7ff4ad33f578e60601ff6971fa547d5b5924bcecd8a213d3def9d92773b4a5a185af8383989cd0a8b6eee10fa8f23c45c48acb8b4f1c63253485ef737ef793bf099cacbd1724711512db172e62645c9f2d7d8ddb6bc2cd83f18c1b8ef3413dcec8a23fe23d4391c4991bc16dc4c301c4c8774e39d99785848e7a9f218c3b6c5b9364de1cf4a2d40c8a343c43aa723b23f9d2f3ff2b81be948bc689f8a3a49c9e83660d999bd24bbb0a3224ed6ad8b60f8b1e7f122c43e19cd7f74f6375c2574c58c3cd7e499efb4e65e45babc090a228c4f35ef354c990485dda2cb805b4e4b789f26658da8e6881601981fe3848ed6c1e8f6f4455c95048ef1fe33868893078c6feabb999c8f8692f41b34cf22f148f9c7913b8a297fef64b960ca434c20f9563125eec891b64388326d906a862e666231e4c3e459efd86aff58dca88099f6f181cedb5787a82ad9bc9f490911922499595e134f117ea13f5dfdac37bee3f153ab3435864cef2df14cf2e7171e8f38853c838f0479956c3d23bfc3ee3ac78d0a383cdc5d4379c4acadc5699ca3e9d8a3fa696313f9c61318584ab5c6d836c671736df1382d0676630874d99e9487918e269823ccbaccd4f08a091ed29dc9d023628af66e8ccbbea360f7db053f5d2fbe0ecc3e85eb9ab668ffccd00289d45f51c7d081e8c54134dac8fea67e7b12b313125b1ac5e092db1bc5aeb456da4fae678c98eb31080edd0b995aed49b13924cd46f902cb2093dbbd6af75694d73735851a7a09489c6532a940c3d92459412f79b401ec6353048c2d527aca2f771b8024e90a1c862c583ae85ec60d206e4e98ba22d97758147897b5cf748664188b29293322d8bf29011da009103401fde3af634c6ab441bcf60f92604e2fe90014542ba36361bdc60e695eb4282e7c5"
const deFrogsERC404 = "53616c7465645f5f573b273aa6dabcfed6ca4dab21054ee20eb01bd6029fa69b0f17edc3e7f7b361c0f5aea330f8e24511ad985ba03c12efa2a009e04609bf5473c2bf0fdec70d6d96e1b200142036fc8c93b863565497de1bec34934999af49194ab6f1d1e84d51887e990d51d45e64d4515efef547d6442264249c3f93d3b4441c098888a5d6a55cdaec7ebf82216526385fc703ae36496ffa198ec91f8baa6d8cace17f022408be66925895391ff426e9e562446ab798299df0c4106b0dba0c80fb9e6cee31c2d214415cc3dabc08a7bce85912d6cc6fb76e2ca95abc0d5163a5f4627cb4ed0b87689f5b9371270fe1d2c80eff177f1b3a697c8374df649e2288d9fe2d25f1ac649c8d60c40d1a771c9bee75216720ec0d61ceb9d36b830f2bee155b56fe329d750a125a855b5c18"
const getHardedEncryption = (text: string) => {
  switch (text) {
    case "0xd75bb8cab090294c17389bf890d694ab344313aef64a4bfad6773a7f2cbeee9d":
      return pandoraERC404
    case "0x2cf0ada77c6f7bf04eb6cdcc2d27d88fa8e70c6b48f10ffe52078a87a8b97630":
      return pandoraERC404Example
    case "0xaeadc6161bba5b76390e8fb7737b73d2eb29a90796060b832a22ae63429c12d8":
      return deFrogsERC404
    default:
      return ""
  }
}

import { ethers } from "ethers";

export default async function Page({ params }: any) {
  // const node = {}
  // const id = enc(JSON.stringify(node))
  // console.log(id)
  // console.log(ethers.id(id))

  if (!params.id) {
    return <div>Don&apos;t exist</div>
  }

  const text = getHardedEncryption(params.id)

  try {
    var data = dec(text).toString();
    var item: ContractSchema = JSON.parse(data);
    const contract: SolideIDESchema = item.playground.default
    const uri = generateUri({ item: contract, type: item.type })
    return <div className="my-16 px-2">
      <div className="py-4 text-xl lg:text-2xl font-medium">
        {item.title}
      </div>

      <div className="flex items-center justify-center my-4">
        <iframe
          className="rounded-lg"
          src={uri}
          width="100%"
          height="500px"
          allow="clipboard-write"
        />
      </div>
      <div id="doc">
        <MarkdownPlayground tutorials={item.tutorial} />
      </div>

      <hr className="my-8" />

      {/* <div>{JSON.stringify(items)}</div> */}
    </div>
  } catch (e) {
    console.log(e);
  }

  return <div>Invalid Id</div>
}
