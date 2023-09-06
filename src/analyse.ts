import * as ci from 'miniprogram-ci';
import fs from 'fs';
import { IAnalyseResult } from 'miniprogram-ci/dist/@types/vendor/code-analyse';

declare var wx: any;
declare var process: any;

function analyse(inProject: ci.Project) {
  ci.analyseCode(inProject).then((res) => {
    const { files } = res!;
    const mainFiles = files.filter((item) => !item.subPackage);
    const subPackageFiles = files.filter((item) => item.subPackage);
    const statFiles = files.map((item) => {
      return {
        path: item.path,
        size: item.size,
        ext: item.ext,
      };
    });

    const top20 = statFiles.sort((a, b) => b.size - a.size).slice(0, 20);
    const totalMainSize = mainFiles.reduce((acc, cur) => acc + cur.size, 0);
    const totalSubSize = subPackageFiles.reduce((acc, cur) => acc + cur.size, 0);

    console.log('--------- analyse start ---------');
    console.log('totalMainSize: ', totalMainSize / 1024 / 1024 + 'MB');
    console.log('totalSubSize: ', totalSubSize / 1024 / 1024 + 'MB');
    console.table(top20);
    console.log('--------- analyse end ---------');
  });
}

export default analyse;
