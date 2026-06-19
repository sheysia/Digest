# MCP 官方文档 Mermaid 图表存档

来源: https://modelcontextprotocol.io/docs/learn/

## 1. Architecture: Host/Client/Server 拓扑

```mermaid
graph TB
  subgraph "MCP Host (e.g. Claude Desktop)"
    Client1[MCP Client 1] --> Server1[MCP Server A<br>Local - Filesystem]
    Client2[MCP Client 2] --> Server2[MCP Server B<br>Local - Database]
    Client3[MCP Client 3] --> Server3[MCP Server C<br>Remote - Sentry]
    Client4[MCP Client 4] --> Server3
  end
```

## 2. Transports: stdio 子进程生命周期

```mermaid
sequenceDiagram
  participant Client
  participant Server (subprocess)
  Client->>Server: Launch subprocess
  loop Communication
    Client->>Server: Write to stdin
    Server->>Client: Write to stdout
    Server-->>Client: Optional stderr logs
  end
  Client->>Server: Terminate
```

## 3. Transports: Streamable HTTP 完整流程

```mermaid
sequenceDiagram
  participant Client
  participant Server
  Client->>Server: POST /mcp (initialize)
  Server-->>Client: 200 + MCP-Session-Id header
  Client->>Server: POST /mcp (client request)
  Server-->>Client: SSE stream with results
  Client->>Server: POST /mcp (notification)
  Server-->>Client: 202 Accepted
  Client->>Server: GET /mcp (open SSE stream)
  Server-->>Client: Server-initiated notifications via SSE
```

## 4. Resources: 发现/订阅/更新流程

```mermaid
sequenceDiagram
  participant Client
  participant Server
  Client->>Server: resources/list
  Server-->>Client: List of resources
  Client->>Server: resources/read (URI)
  Server-->>Client: Resource content
  Client->>Server: resources/subscribe (URI)
  Note over Server: Resource changes
  Server-->>Client: notifications/resources/updated
  Client->>Server: resources/read (URI)
  Server-->>Client: Updated content
```

## 5. Tools: LLM 驱动的发现/调用流程

```mermaid
sequenceDiagram
  participant LLM
  participant Client
  participant Server
  Client->>Server: tools/list
  Server-->>Client: Available tools
  Note over LLM: User query arrives
  LLM->>Client: Select tool to call
  Client->>Server: tools/call (name, args)
  Server-->>Client: Tool result
  Client->>LLM: Return result
  Note over LLM: Formulate response
```

## 6. Prompts: 列表/获取/更新流程

```mermaid
sequenceDiagram
  participant Client
  participant Server
  Client->>Server: prompts/list
  Server-->>Client: Available prompts
  Note over Client: User selects prompt
  Client->>Server: prompts/get (name, args)
  Server-->>Client: Prompt messages
  Note over Server: Prompts change
  Server-->>Client: notifications/prompts/list_changed
  Client->>Server: prompts/list
  Server-->>Client: Updated prompt list
```

## 未能下载的截图 (CDN 防盗链)

- Resource picker UI: `mintcdn.com/.../resource-picker.png` (174x181)
- Slash command UI: `mintcdn.com/.../slash-command.png` (293x106)
