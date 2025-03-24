#!/bin/bash

# 查找所有带有白色文字的轮廓按钮的文件
FILES=$(grep -r "variant=\"outline\" className=\"text-white" --include="*.tsx" src/app/)

# 替换样式
while IFS= read -r line; do
  file=$(echo "$line" | cut -d':' -f1)
  echo "修复文件: $file"
  # 替换白色文字按钮为我们的新类
  sed -i '' 's/variant="outline" className="text-white border-white hover:bg-white\/10"/variant="outline" className="btn-white-outline"/g' "$file"
done <<< "$FILES"

echo "所有按钮已修复！" 