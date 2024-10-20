# git 钩子

Git 钩子（`Git Hooks`）是 `Git` 提供的一种机制，用于在 `Git` 仓库的特定操作（如提交、合并、推送等）发生时自动执行自定义脚本。  
钩子**可以阻止** Git 的操作（返回非零值），也可以在操作完成后执行后续任务（如通知、清理等）。

## 一、执行方式

Git 钩子存放在项目的 .git/hooks 目录（使用 husky，则存放在 .husky 目录）下。 当特定 Git 操作发生时，Git 会自动调用对应的钩子脚本，执行相应的任务。

钩子脚本可以是任何可执行脚本，常用的语言包括 `Shell 脚本、Python、Perl、Node.js` 等。Git 钩子执行时，默认没有传递环境变量，所以要保证这些脚本文件有可执行权限，并且明确指定要使用的解释器（如 #!/bin/bash）。

## 二、常见的 Git 钩子类型

Git 分为 客户端钩子 和 服务端钩子，常见的客户端钩子有：

- `pre-commit`：在执行 git commit 之前触发，适合进行代码检查、代码格式化或运行测试等操作。
- `prepare-commit-msg`：在打开提交信息编辑器之前触发，用于修改默认的提交信息。
- `commit-msg`：在提交信息编辑器关闭后触发，用于验证提交信息的格式是否符合要求。
- `pre-push`：在执行 git push 之前触发，适合进行代码检查或验证提交信息的完整性。
- `post-merge`：在合并操作完成后触发，适合用于更新文件或执行额外任务。

## 三、传递的参数

不同的 Git 钩子会接收不同的参数。以下列出一些常见钩子的参数：

1. `pre-commit`

   - 参数：无
   - 执行时机：在 git commit 执行之前。
   - 用途：通常用于检查代码格式、运行测试等。如果钩子脚本返回非零值，提交会被取消。

2. `prepare-commit-msg`

   - 参数：
   - $1：保存提交对象的路径（.git/COMMIT_EDITMSG 文件的路径）。
   - $2：提交类型（如 message、template、merge、squash）。
   - $3：如果是 commit --amend，则为提交的哈希值。
   - 执行时机：在默认提交信息被生成后，编辑器启动之前。
   - 用途：修改默认的提交信息，比如添加模板或处理 merge commit 的提交信息。

3. `commit-msg`

   - 参数：
     - $1：提交信息文件的路径（.git/COMMIT_EDITMSG 文件的路径）。
   - 执行时机：提交信息编辑器关闭之后，git commit 提交消息生成之后，但实际提交操作之前。
   - 用途：验证提交信息的格式，如果返回非零值，提交会被终止。

   示例：

   ```bash
   #!/bin/bash
   # 验证提交信息的格式
   commit_msg_file="$1"
   commit_msg=$(cat "$commit_msg_file")

   if [[ "$commit_msg" != feat:* ]]; then
     echo "提交信息必须以 'feat:' 开头"
     exit 1  # 返回非零值阻止提交
   fi
   ```

4. `post-commit`

   - 参数：无
   - 执行时机：在提交完成之后执行。
   - 用途：通常用于通知或记录提交成功后的操作，比如发送通知、记录日志等。

5. `pre-push`

   - 参数：
     - $1：远程仓库的名称（如 origin）。
     - $2：远程仓库的 URL。
   - 执行时机：在 git push 之前执行，检查推送内容是否合法。返回非零值会取消推送。

   示例：

   ```bash
   #!/bin/bash
   # pre-push 钩子示例：检查推送的远程仓库
   remote_name="$1"
   remote_url="$2"

   echo "准备推送到 $remote_name ($remote_url)"

   # 执行自定义检查逻辑
   ```

6. `post-merge`

   - 参数：
     - $1：合并是否为 git pull 操作的合并（1 表示是，0 表示否）。
   - 执行时机：在 git merge 完成后执行。
   - 用途：合并完成后进行相关操作，比如重新安装依赖、重启服务等。

## 四、注意事项

- 钩子脚本文件必须具有可执行权限（如 chmod +x）。
- 同步性：钩子是同步执行的，也就是说，当钩子在执行时，Git 会等待钩子执行完毕才能继续。
- 返回值：大部分钩子脚本通过其返回值来控制 Git 操作的继续进行。通常，如果钩子返回非零值，Git 操作会被中止。
- 无法跨系统共享：Git 钩子是本地设置的，它们不会被自动推送到远程仓库或其他开发者的本地环境。如果想要在团队中统一使用，可以通过工具（如 Husky）在项目的 package.json 中配置自动安装钩子脚本。