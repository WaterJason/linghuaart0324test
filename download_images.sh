#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# History page images
curl -o public/images/jingtailan-origin.jpg https://pic1.zhimg.com/v2-0eb5e3d99df8ccdc72e4d5aa06ded8c9_r.jpg
curl -o public/images/ming-dynasty-cloisonne.jpg http://www.jtlzj.net/d/file/jingtailanjieshao/ae20d908ca02a6330637e4c5cde132fd.jpg
curl -o public/images/qing-dynasty-cloisonne.jpg http://www.jtlzj.net/d/file/jingtailanjieshao/1380c44a02b9dd5e1e4c5c8554a9b598.jpg
curl -o public/images/modern-cloisonne.jpg https://pic3.zhimg.com/v2-f8ee404d9097d3e7e77a22da3cdaede2_r.jpg
curl -o public/images/yuan-dynasty-cloisonne.jpg http://www.jtlzj.net/d/file/jingtailanjianbie/615175bcb06bf11a21d779931d3f0572.jpg
curl -o public/images/ming-jingtai-cloisonne.jpg http://feicui168.com/s_pc/old/nimg/U5566P1081T2D69572F7DT20120530101848.jpg
curl -o public/images/qing-qianlong-cloisonne.jpg https://pic1.zhimg.com/v2-89b3b5ed0c80c1cd3387ced1a9d022a9_r.jpg
curl -o public/images/modern-cloisonne-thangka.jpg https://pic1.zhimg.com/v2-17b5842ce0e28a4c2e60f0c66c56d889_r.jpg
curl -o public/images/modern-peace-cloisonne.jpg https://pic1.zhimg.com/v2-bd5ff7ce4b4b9fca84d3cd97e85cad2a_r.jpg
curl -o public/images/modern-cloisonne-jewelry.jpg https://pic1.zhimg.com/v2-74b7fcf9f2906f2e2db0539dc4cb76fc_r.jpg

# Contemporary page images
curl -o public/images/contemporary-cloisonne-overview.jpg https://pic1.zhimg.com/v2-04e82be98edd0a9d0da143d7e8d09b30_r.jpg
curl -o public/images/master-zhangtonglu.jpg https://pic1.zhimg.com/v2-bb1f6fe9fcf9af32de9ad0f5b5bd0d87_r.jpg
curl -o public/images/master-zhongliancheng.jpg https://pic1.zhimg.com/v2-e39ddcfaef0e0fdd36e1da1e03fb7a93_r.jpg
curl -o public/images/master-wangxiaoxin.jpg https://pic2.zhimg.com/v2-ebbbe6c08ad3a0b0aaaa16f64c50d52e_r.jpg
curl -o public/images/master-dingminghong.jpg https://pic1.zhimg.com/v2-1cdb3bd9c1e0df4d02f4ebdfdb1b0c93_r.jpg

# Contemporary applications
curl -o public/images/contemporary-collection.jpg https://pic1.zhimg.com/v2-0c06b30dfed8a0bbbccd23363072ddfe_r.jpg
curl -o public/images/contemporary-jewelry.jpg https://pic1.zhimg.com/v2-74b7fcf9f2906f2e2db0539dc4cb76fc_r.jpg
curl -o public/images/contemporary-homeware.jpg https://pic1.zhimg.com/v2-d1bc3a22f91ba3e4bc2433e0a0e5ac67_r.jpg
curl -o public/images/contemporary-gift.jpg https://pic2.zhimg.com/v2-9b7de1bbedbc6ef9a38aad16d5b6b10a_r.jpg
curl -o public/images/contemporary-fashion.jpg https://pic1.zhimg.com/v2-fdd3f8ffa7da0a9eb37a67ac41aead77_r.jpg
curl -o public/images/contemporary-diy.jpg https://pic1.zhimg.com/v2-53b64f45a6d0b8a3ab42e82b0c0b5577_r.jpg

echo "All images downloaded successfully!"
