// 文档数据结构

export interface DocCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  docs: string[];
}

export interface DocItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  author: string;
  tags: string[];
  content: string;
}

export const docCategories: DocCategory[] = [
  {
    id: "getting-started",
    name: "快速开始",
    icon: "🚀",
    description: "快速上手 SnowyMC 插件开发",
    docs: ["introduction", "quick-start", "installation"]
  },
  {
    id: "plugin-development",
    name: "插件开发",
    icon: "🧩",
    description: "Minecraft 插件开发教程",
    docs: ["basic-concepts", "command-system", "event-listener", "config-files"]
  },
  {
    id: "server-operation",
    name: "服务器运维",
    icon: "⚙️",
    description: "服务器部署与管理",
    docs: ["server-setup", "performance-optimization"]
  }
];

export const docs: Record<string, DocItem> = {
  // 快速开始
  "introduction": {
    slug: "introduction",
    title: "介绍",
    description: "了解 SnowyMC 插件开发的基本概念",
    category: "getting-started",
    lastUpdated: "2026-04-06",
    author: "小浩",
    tags: ["入门", "基础"],
    content: `
# 介绍

欢迎来到 SnowyMC 文档！

## 什么是 SnowyMC？

SnowyMC 是一个专注于 Minecraft 插件开发的团队，我们致力于打造高质量、高性能、可扩展的 Minecraft 插件解决方案。

## 我们提供什么？

- **高性能插件**：优化代码结构，确保服务器运行流畅
- **模块化设计**：易于扩展和定制
- **完善的文档**：详细的开发指南和 API 文档
- **社区支持**：活跃的社区交流和技术支持

## 技术栈

- **Java 17+**：使用现代 Java 语言特性
- **Paper API**：基于 Paper 服务端的高性能 API
- **Gradle**：现代化的构建工具
- **Git**：版本控制

## 许可证

我们的插件采用 MIT 许可证，您可以自由使用、修改和分发。

## 联系方式

- GitHub: https://github.com/SnowyMCT
- QQ 群: 加入我们的社区群组讨论
- 论坛: https://forum.snowymc.com

让我们开始吧！
`
  },

  "quick-start": {
    slug: "quick-start",
    title: "快速开始",
    description: "5 分钟快速上手插件开发",
    category: "getting-started",
    lastUpdated: "2026-04-06",
    author: "小浩",
    tags: ["入门", "快速", "教程"],
    content: `
# 快速开始

本文将帮助你在 5 分钟内创建第一个插件！

## 环境要求

- JDK 17 或更高版本
- IntelliJ IDEA 或 VS Code
- Minecraft 服务端（推荐 Paper）

## 创建项目

\`\`\`bash
# 克隆示例项目
git clone https://github.com/SnowyMCT/SnowyTemplate.git

# 进入目录
cd SnowyTemplate

# 构建项目
./gradlew build
\`\`\`

## 项目结构

\`\`\`
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── snowy/
│   │           └── example/
│   │               ├── ExamplePlugin.java
│   │               └── commands/
│   └── resources/
│       └── plugin.yml
build.gradle
\`\`\`

## 编写第一个命令

\`\`\`java
public class HelloCommand implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command command, 
                             String label, String[] args) {
        sender.sendMessage("§a你好！欢迎使用 SnowyMC 插件！");
        return true;
    }
}
\`\`\`

## 注册命令

在 \`onEnable\` 方法中：

\`\`\`java
getCommand("hello").setExecutor(new HelloCommand());
\`\`\`

## 构建和测试

\`\`\`bash
./gradlew build
\`\`\`

生成的 JAR 文件在 \`build/libs/\` 目录下。

## 下一步

- 学习 [基础概念](/docs/basic-concepts)
- 查看 [命令系统](/docs/command-system)
- 了解 [配置文件](/docs/config-files)
`
  },

  "installation": {
    slug: "installation",
    title: "安装配置",
    description: "开发环境安装与配置",
    category: "getting-started",
    lastUpdated: "2026-04-06",
    author: "小浩",
    tags: ["安装", "配置", "环境"],
    content: `
# 安装配置

本指南帮助你配置完整的插件开发环境。

## 安装 JDK

### Windows

1. 下载 JDK 17+：https://adoptium.net/
2. 运行安装程序
3. 设置环境变量：
   \`\`\`bash
   setx JAVA_HOME "C:\\Program Files\\Eclipse Adoptium\\jdk-17.x.x-x"
   \`\`\`

### Linux / macOS

\`\`\`bash
# Ubuntu
sudo apt install openjdk-17-jdk

# macOS
brew install openjdk@17
\`\`\`

## 安装 IDE

### IntelliJ IDEA（推荐）

1. 下载：https://www.jetbrains.com/idea/
2. 安装 Scala 插件（可选）
3. 安装 Minecraft Development 插件

### VS Code

推荐插件：
- Extension Pack for Java
- Minecraft Snippets

## 安装 Git

\`\`\`bash
# Linux
sudo apt install git

# macOS
brew install git
\`\`\`

## 验证安装

\`\`\`bash
java -version
git --version
\`\`\`

## 下一步

现在可以开始 [快速开始](/docs/quick-start) 了！
`
  },

  // 插件开发
  "basic-concepts": {
    slug: "basic-concepts",
    title: "基础概念",
    description: "Minecraft 插件开发核心概念",
    category: "plugin-development",
    lastUpdated: "2026-04-06",
    author: "小浩",
    tags: ["概念", "基础", "核心"],
    content: `
# 基础概念

了解 Minecraft 插件开发的核心概念。

## Bukkit/Spigot/Paper 关系

- **Bukkit**：插件 API 规范
- **Spigot**：基于 Bukkit 的优化版本
- **Paper**：基于 Spigot 的高性能版本（推荐）

## 插件生命周期

\`\`\`java
public class MyPlugin extends JavaPlugin {
    
    @Override
    public void onEnable() {
        // 插件启用时执行
        getLogger().info("插件已启用！");
    }
    
    @Override
    public void onDisable() {
        // 插件禁用时执行
        getLogger().info("插件已禁用！");
    }
}
\`\`\`

## plugin.yml

每个插件必须包含 \`plugin.yml\`：

\`\`\`yaml
name: MyPlugin
version: 1.0.0
main: com.example.mycls.MyPlugin
api-version: '1.20'
description: 我的第一个插件
author: YourName
\`\`\`

## 服务端事件

使用 \`@EventHandler\` 监听事件：

\`\`\`java
@EventHandler
public void onPlayerJoin(PlayerJoinEvent event) {
    Player player = event.getPlayer();
    player.sendMessage("§a欢迎来到服务器！");
}
\`\`\`

## 注册监听器

\`\`\`java
getServer().getPluginManager().registerEvents(new MyListener(), this);
\`\`\`

## 下一步

- 学习 [命令系统](/docs/command-system)
- 了解 [事件监听](/docs/event-listener)
`
  },

  "command-system": {
    slug: "command-system",
    title: "命令系统",
    description: "创建和管理插件命令",
    category: "plugin-development",
    lastUpdated: "2026-04-06",
    author: "小浩",
    tags: ["命令", "CommandExecutor", "TabCompleter"],
    content: `
# 命令系统

学习如何在插件中创建命令。

## 基本命令

### 实现 CommandExecutor

\`\`\`java
public class MyCommand implements CommandExecutor {
    @Override
    public boolean onCommand(CommandSender sender, Command command,
                             String label, String[] args) {
        if (args.length < 1) {
            sender.sendMessage("§c用法: /mycommand <参数>");
            return true;
        }
        
        String arg = args[0];
        sender.sendMessage("§a你输入的参数是: " + arg);
        return true;
    }
}
\`\`\`

### 注册命令

\`\`\`java
@Override
public void onEnable() {
    getCommand("mycommand").setExecutor(new MyCommand());
}
\`\`\`

## Tab 补全

\`\`\`java
public class MyTabCompleter implements TabCompleter {
    @Override
    public List<String> onTabComplete(CommandSender sender, Command command,
                                       String alias, String[] args) {
        if (args.length == 1) {
            List<String> completions = new ArrayList<>();
            completions.add("help");
            completions.add("info");
            completions.add("reload");
            
            return completions.stream()
                .filter(s -> s.startsWith(args[0]))
                .collect(Collectors.toList());
        }
        return new ArrayList<>();
    }
}
\`\`\`

## 注册 Tab 补全

\`\`\`java
getCommand("mycommand").setTabCompleter(new MyTabCompleter());
\`\`\`

## 子命令模式

\`\`\`java
@Override
public boolean onCommand(CommandSender sender, Command command,
                         String label, String[] args) {
    if (args.length == 0) {
        sendHelp(sender);
        return true;
    }
    
    switch (args[0].toLowerCase()) {
        case "start":
            return handleStart(sender);
        case "stop":
            return handleStop(sender);
        default:
            sendHelp(sender);
            return true;
    }
}
\`\`\`

## 权限检查

\`\`\`java
if (!sender.hasPermission("myplugin.admin")) {
    sender.sendMessage("§c你没有权限使用此命令！");
    return true;
}
\`\`\`
`
  },

  "event-listener": {
    slug: "event-listener",
    title: "事件监听",
    description: "监听和处理游戏事件",
    category: "plugin-development",
    lastUpdated: "2026-04-06",
    author: "小浩",
    tags: ["事件", "EventHandler", "监听器"],
    content: `
# 事件监听

学习如何监听和处理 Minecraft 事件。

## 基本事件监听

\`\`\`java
public class PlayerListener implements Listener {
    
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        Player player = event.getPlayer();
        player.sendMessage("§a欢迎来到服务器！");
    }
    
    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        Player player = event.getPlayer();
        getLogger().info(player.getName() + " 离开了服务器");
    }
}
\`\`\`

## 注册监听器

\`\`\`java
getServer().getPluginManager().registerEvents(new PlayerListener(), this);
\`\`\`

## 事件优先级

\`\`\`java
@EventHandler(priority = EventPriority.HIGHEST)
public void onDamage(EntityDamageEvent event) {
    // 最高优先级，最后执行
}
\`\`\`

可用优先级：
- LOWEST
- LOW
- NORMAL
- HIGH
- HIGHEST
- MONITOR

## 常用事件

### 玩家事件
- PlayerJoinEvent - 玩家加入
- PlayerQuitEvent - 玩家离开
- PlayerInteractEvent - 玩家交互
- PlayerMoveEvent - 玩家移动
- PlayerChatEvent - 玩家聊天

### 方块事件
- BlockBreakEvent - 方块破坏
- BlockPlaceEvent - 方块放置

### 实体事件
- EntityDeathEvent - 实体死亡
- EntityDamageByEntityEvent - 实体受伤

## 取消事件

\`\`\`java
@EventHandler
public void onBlockBreak(BlockBreakEvent event) {
    Player player = event.getPlayer();
    if (player.isSneaking()) {
        event.setCancelled(true);  // 取消事件
    }
}
\`\`\`
`
  },

  "config-files": {
    slug: "config-files",
    title: "配置文件",
    description: "创建和使用配置文件",
    category: "plugin-development",
    lastUpdated: "2026-04-06",
    author: "小浩",
    tags: ["配置", "config.yml", "YAML"],
    content: `
# 配置文件

学习如何创建和管理插件配置文件。

## 默认配置文件

在 \`src/main/resources/\` 放置 \`config.yml\`，插件会自动加载。

\`\`\`yaml
# config.yml
plugin:
  name: "MyPlugin"
  version: "1.0.0"
  
messages:
  prefix: "&8[&6MyPlugin&8] "
  welcome: "&a欢迎来到服务器！"
  
settings:
  enable-feature: true
  max-players: 100
\`\`\`

## 读取配置

\`\`\`java
// 获取配置
String prefix = getConfig().getString("messages.prefix");
boolean enabled = getConfig().getBoolean("settings.enable-feature");

// 获取带默认值
int max = getConfig().getInt("settings.max-players", 50);
\`\`\`

## 保存配置

\`\`\`java
// 修改配置
getConfig().set("settings.max-players", 200);

// 保存到文件
saveConfig();
\`\`\`

## 自定义配置文件

\`\`\`java
private File customFile;
private FileConfiguration customConfig;

private void createCustomConfig() {
    customFile = new File(getDataFolder(), "custom.yml");
    if (!customFile.exists()) {
        saveResource("custom.yml", false);
    }
    customConfig = YamlConfiguration.loadConfiguration(customFile);
}
\`\`\`

## 配置示例

\`\`\`java
@Override
public void onEnable() {
    // 创建默认配置
    saveDefaultConfig();
    
    // 读取配置
    String message = getConfig().getString("messages.welcome", "默认消息");
    
    // 处理配置
    if (getConfig().getBoolean("settings.enable-feature")) {
        getLogger().info("功能已启用！");
    }
}
\`\`\`

## 最佳实践

1. **始终提供默认值**
2. **使用路径分隔**：\`section.subsection.key\`
3. **注释配置**：使用 \`#\` 注释
4. **验证配置**：启动时检查关键配置
`
  },

  // 服务器运维
  "server-setup": {
    slug: "server-setup",
    title: "服务器部署",
    description: "Minecraft 服务器部署指南",
    category: "server-operation",
    lastUpdated: "2026-04-06",
    author: "豆哥",
    tags: ["服务器", "部署", "Paper"],
    content: `
# 服务器部署

学习如何部署 Minecraft 服务器。

## 选择服务端

推荐使用 **Paper** 或 **Pufferfish**：
- Paper: https://papermc.io/downloads/paper
- Pufferfish: https://pufferfish.host/downloads

## 系统要求

### 最低配置
- 2GB RAM
- 2 CPU 核心
- 10GB 存储

### 推荐配置
- 4GB+ RAM
- 4+ CPU 核心
- 20GB+ 存储

## 快速部署

### Linux (Ubuntu/Debian)

\`\`\`bash
# 更新系统
sudo apt update && sudo apt upgrade

# 安装 Java
sudo apt install openjdk-17-jdk

# 创建用户
sudo useradd -m -s /bin/bash mcserver
sudo su - mcserver

# 下载 Paper
mkdir ~/server && cd ~/server
curl -O https://api.papermc.io/v2/projects/paper/versions/1.21.4/builds/229/downloads/paper-1.21.4-229.jar

# 启动
java -Xmx2G -Xms1G -jar paper.jar --nogui
\`\`\`

## 启动脚本

\`\`\`bash
#!/bin/bash
java -Xmx4G -Xms2G -XX:+UseG1GC -XX:+ParallelRefProcEnabled \
     -XX:MaxGCPauseMillis=200 \
     -XX:+UnlockExperimentalVMOptions \
     -XX:+DisableExplicitGC \
     -XX:+AlwaysPreTouch \
     -jar paper.jar --nogui
\`\`\`

## 首次启动后配置

1. 接受 EULA：\`eula=true\`
2. 编辑 \`server.properties\`
3. 安装必要插件
4. 配置白名单

## 下一步

- 学习 [性能优化](/docs/performance-optimization)
`
  },

  "performance-optimization": {
    slug: "performance-optimization",
    title: "性能优化",
    description: "服务器性能优化技巧",
    category: "server-operation",
    lastUpdated: "2026-04-06",
    author: "豆哥",
    tags: ["性能", "优化", "TPS"],
    content: `
# 性能优化

让服务器运行更流畅！

## JVM 参数调优

\`\`\`bash
java \\
  -Xmx4G -Xms2G \\
  -XX:+UseG1GC \\
  -XX:+ParallelRefProcEnabled \\
  -XX:MaxGCPauseMillis=200 \\
  -XX:+UnlockExperimentalVMOptions \\
  -XX:+DisableExplicitGC \\
  -XX:+AlwaysPreTouch \\
  -XX:G1NewSizePercent=30 \\
  -XX:G1MaxNewSizePercent=40 \\
  -XX:G1HeapRegionSize=8M \\
  -XX:G1ReservePercent=20 \\
  -jar paper.jar --nogui
\`\`\`

## Paper 配置优化

\`\`\`yaml
# spigot.yml
world-settings:
  default:
    view-distance: 8
    simulation-distance: 6
    entity-ch-range: 48
    mob-spawn-range: 4

# paper.yml
world:
  auto-reload-ticks: 60
\`\`\`

## 插件优化

1. **移除不必要插件**
2. **使用异步处理**
3. **配置合理的 tick 间隔**
4. **定期清理缓存**

## 监控 TPS

\`\`\`bash
# 使用 Paper 内置命令
/tps

# 查看详细性能
 timings
\`\`\`

## 常见问题

### TPS 低于 20
- 检查插件性能
- 减少世界生成
- 降低视距

### 卡顿
- 增加内存
- 使用更快的存储
- 检查 CPU 负载
`
  }
};

export function getDocBySlug(slug: string): DocItem | undefined {
  return docs[slug];
}

export function getDocsByCategory(categoryId: string): DocItem[] {
  const category = docCategories.find(c => c.id === categoryId);
  if (!category) return [];
  return category.docs.map(slug => docs[slug]).filter(Boolean);
}

export function getAllDocs(): DocItem[] {
  return Object.values(docs);
}

export function getPrevNextDoc(currentSlug: string): { prev?: DocItem; next?: DocItem } {
  const allDocSlugs = docCategories.flatMap(c => c.docs);
  const currentIndex = allDocSlugs.indexOf(currentSlug);
  
  const prevSlug = currentIndex > 0 ? allDocSlugs[currentIndex - 1] : undefined;
  const nextSlug = currentIndex < allDocSlugs.length - 1 ? allDocSlugs[currentIndex + 1] : undefined;
  
  return {
    prev: prevSlug ? docs[prevSlug] : undefined,
    next: nextSlug ? docs[nextSlug] : undefined
  };
}
