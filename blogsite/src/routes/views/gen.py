with open("Images.tsx") as f:
    for i in range(460):
        f.write('import img0 from "./images/image0.png"\n')
    f.write('export const images : {[key:string] : any} = {')
    for i in range(460):
        f.write('"./images/image0.png" : img0,')
    f.write('}')