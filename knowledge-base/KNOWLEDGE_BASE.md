# Blog Knowledge Base

This file is the human-curated map of the blog. Its companion `posts.json` is auto-generated and machine-queryable. Together they let an agent answer questions about the blog without loading every post.

## For Agents: How to Use This Knowledge Base

- Load **this file first** for the high-level map: scope, reading paths, cross-cutting views, author context.
- Load **`knowledge-base/posts.json`** when you need structured queries: post metadata by slug, posts that cover a concept, prerequisite walks, tech filters.
- To open the full text of a post, read `front/public/blog/posts/<category>/<slug>.md`. Slugs are stable; treat them as canonical IDs.
- When citing a post to the user, link it as `https://edserranoc.github.io/portfolio/#/blog/<slug>`.
- This is a personal knowledge base, not a tutorial site. Posts are how the author thinks through topics — treat them as primary sources written by the user themselves.

## What the Blog Covers

Three top-level lanes (this is the file-system category, kept because it is also how the site is organized):

- **field-notes** — practical engineering walkthroughs from the author's work: RAG, agents, data infra, GCP stack, ML tooling, MLOps. The largest lane. Production-oriented.
- **research** — paper readings and conceptual deep-dives: Transformers, BERT, Mamba, RAG paper, scaling laws, manifold hypothesis, embeddings.
- **curiosities** — math and theory adjacent to ML: graph theory, algebraic number theory, PageRank, group theory, Gödel, Fourier.

The blog is dense. Most posts are 4,000–7,000 words and assume working knowledge of software engineering and basic ML.

## Reading Paths

Curated sequences for common goals. Each path is a slug list in the suggested order. These are the paths the author would actually recommend; they are not exhaustive.

### Learn RAG from zero to production
1. embeddings-geometry-of-meaning
2. rag-retrieval-augmented-generation
3. rag-building-production-systems
4. rag-advanced-patterns
5. ragas-evaluating-rag
6. query-routing-agent-decisions

### Build your first LLM agent
The builder's path. For the operator's counterpart — hosting other teams' agents — see "Run an agent platform" below.
1. model-context-protocol
2. production-llm-agents-patterns
3. langgraph-multi-agent-workflows
4. ontology-to-agent-toolbox
5. query-routing-agent-decisions
6. mcp-production-enterprise

### Stand up a knowledge base or knowledge graph
1. enterprise-knowledge-bases
2. knowledge-base-curation
3. ontologies-building-knowledge-bases
4. knowledge-graphs-practice
5. choosing-a-graph-engine-2026
6. ontology-to-agent-toolbox

### Modern data engineering stack
1. data-engineering-fundamentals
2. dimensional-modeling-kimball
3. lakehouse-architecture
4. dbt-analytics-engineering
5. lookml-semantic-layer-data-modeling
6. apache-airflow-orchestration
7. dama-dmbok-data-governance

### From ML basics to production
1. ml-libraries-under-the-hood
2. structuring-ml-projects
3. experiment-tracking-mlops
4. ml-metrics-evaluation-monitoring
5. cloud-ml-infrastructure
6. working-with-ml-models

### Fine-tuning and alignment
1. fine-tuning-embeddings
2. fine-tuning-gemma4-lora-qlora
3. rlhf-dpo-alignment
4. reinforcement-learning-first-principles
5. reinforcement-learning-in-practice

### Embeddings and vector search
1. embeddings-geometry-of-meaning
2. multimodal-embeddings-metric-problem
3. mteb-embedding-benchmarks
4. vector-db-benchmarks
5. fine-tuning-embeddings

### LLM internals and serving
1. attention-is-all-you-need
2. bert-pre-training-bidirectional-transformers
3. t5-text-to-text-transfer-transformer
4. mamba-selective-state-spaces
5. scaling-laws-neural-language-models
6. microgpt-reading-karpathy
7. local-llm-inference-tools
8. llm-caching-four-layers
9. llm-benchmarks

### Graph theory thread (the spine)
The same eigenvector math that ranked the early web now ranks context for a coding agent, scores a fraud ring, and maps an organization. These five are the shared foundation; after them, branch into whichever graph series matches the problem.
1. graph-theory-mathematics-of-connections
2. network-science-communities-centrality
3. pagerank-eigenvectors
4. knowledge-graphs-practice
5. graph-neural-networks-learning-structured-data

Branches from here: **Graph Engines Under the Hood** for storage and query engines, **Graph Analytics in Production** for computing over the graph, **The Graph Layer for Agents** for coding agents, **Enterprise Ontology / Banking Knowledge Graph** for schema-first enterprise modelling.

### Choose and run a graph database
From the data model down to the engine and the query language.
1. knowledge-graphs-practice
2. graph-engine-internals-index-free-adjacency
3. gql-standard-cypher-sqlpgq
4. choosing-a-graph-engine-2026
5. spanner-graph-for-knowledge-and-agents

### Graph analytics for fraud and risk
The applied arc a financial-services engineer actually needs, from the math to the alert queue.
1. graph-theory-mathematics-of-connections
2. network-science-communities-centrality
3. graph-analytics-gds-execution-model
4. centrality-communities-in-practice
5. node-embeddings-fastrp-node2vec-graphsage
6. graph-fraud-detection-rings-synthetic-identity

### Run an agent platform
The operator's path: hosting other teams' agents rather than building one. Pairs with "Build your first LLM agent" above.
1. agent-platform-control-plane-data-plane
2. agent-runtime-sessions-state-topology
3. sandboxing-agents-microvm-gvisor
4. mcp-registry-gateway-tool-plane
5. agent-golden-paths-multi-tenancy
6. operating-agents-eval-observability-scale
7. finops-llm-agents-token-economics
8. enterprise-agent-governance-lifecycle

### Secure an agent system
Cross-cutting path assembled from the security posts, ordered from threat model to enforcement.
1. agent-guardrails-field-guide
2. enterprise-agents-governance-security-business
3. agent-authentication-oauth-mcp-identity
4. bank-grade-agent-security-iam-gateways
5. sandboxing-agents-microvm-gvisor
6. mcp-registry-gateway-tool-plane

### The Graph Layer for Agents (five-part series)
Why grep and embeddings stop being enough for coding agents, and what replaces them.
1. agent-graph-layer-why-grep-embeddings-fell-short
2. repo-to-graph-ast-vs-llm-extraction
3. querying-code-graphs-blast-radius-localization
4. graph-memory-temporal-agents-graphiti-cognee
5. graph-layer-in-production-mcp-build-vs-buy

### Graph Engines Under the Hood (three-part series)
How a graph engine actually works underneath, what the query standard changed, and how to pick one.
1. graph-engine-internals-index-free-adjacency
2. gql-standard-cypher-sqlpgq
3. choosing-a-graph-engine-2026

### Graph Analytics in Production (five-part series)
Computing over a graph rather than modelling it: the execution model, the algorithms, the embeddings, and the applied cases.
1. graph-analytics-gds-execution-model
2. centrality-communities-in-practice
3. node-embeddings-fastrp-node2vec-graphsage
4. organizational-network-analysis-company-graph
5. graph-fraud-detection-rings-synthetic-identity

### The Agent Platform (five-part series)
The platform engineer's view rather than the agent builder's: operating the substrate that other teams' agents run on.
1. agent-platform-control-plane-data-plane
2. agent-runtime-sessions-state-topology
3. sandboxing-agents-microvm-gvisor
4. mcp-registry-gateway-tool-plane
5. agent-golden-paths-multi-tenancy

### Google ADK in Depth (six-part series)
The Agent Development Kit end to end, from the mental model to the 2.x graph runtime, migration, debugging, and durable memory.
1. google-adk-agent-development-deep-dive
2. adk-graph-workflows-deterministic-orchestration
3. migrating-adk-1x-to-2x
4. debugging-adk-agent-flows
5. adk-advanced-evolution-of-agent-engineering
6. enterprise-agent-memory-continuity-adk-geap

### The Shape of a Problem (three-part series)
The geometric intuition the theorems assume you already have, and the recommended prologue to *Why Learning Works*. Three objects, one set of operations — project, weigh with a quadratic form, read the curvature. Post one reads the objective: norms as preferences, least squares as projection, quadratic forms as ellipsoids, the condition number as the number that unifies numerical error and convergence rate and multicollinearity, the Hessian as curvature, and duality as a shadow price. Post two reads the data: expectation as an L2 projection, covariance as a quadratic form, Fisher information as the Hessian of the KL divergence, and the high-dimensional geometry that breaks nearest-neighbour intuition. Post three reads the learned representation: embedding anisotropy and the narrow cone, contrastive loss as a shape specification, intrinsic dimension, superposition as a packing bound, and hyperbolic space for hierarchies. Intuition-first: theorems are stated precisely and pointed at the posts that prove them.
1. the-objective-has-a-shape
2. the-distribution-has-a-shape
3. the-representation-has-a-shape

### Why Learning Works (fifteen-part series)
The proofs under the practice. Where the loss function comes from, what you are actually minimizing, the concentration inequalities every generalization bound is built from, PAC learning and VC dimension, why no model escapes its own assumptions, and the theorems behind regularization, kernels, boosting, spectral methods, EM and the Bellman operator. Proof-heavy: theorems are stated formally and proved, or the gap is named.
1. loss-functions-are-probability-assumptions
2. what-are-we-minimizing-erm-bias-variance
3. markov-to-hoeffding-concentration-inequalities
4. probably-approximately-correct
5. vc-dimension-sauer-shelah
6. no-free-lunch-theorem
7. penalizing-is-constraining
8. kernel-trick-representer-theorem
9. weak-learnability-equals-strong
10. one-eigendecomposition-four-algorithms
11. em-never-goes-down
12. bellman-operator-is-a-contraction
13. universal-approximation-and-what-it-does-not-give-you
14. backprop-is-reverse-mode-differentiation
15. double-descent

### Senior Engineering Judgment in the AI Era (five-part series)
What stays scarce when an AI can generate the code: infrastructure, data modeling, API contracts, distributed-systems theory, and product judgment.
1. senior-infrastructure-distributed-systems-failure-networking
2. senior-data-modeling-query-patterns-database-design
3. senior-api-design-contracts-versioning-dx
4. senior-distributed-theory-cap-pacelc-tradeoffs
5. senior-product-engineering-scale-prioritization-architecture

### Enterprise Ontology / Banking Knowledge Graph (four-part series)
1. tbox-abox-schema-facts-distinction
2. modular-ontologies-core-domains-pattern
3. ontology-production-pipeline-gcp
4. populating-knowledge-graph-llms-banking

### Knowledge Catalog & Knowledge Architecture
The four-part arc on Google's Knowledge Catalog vs ontologies, plus the hands-on companion and the adjacent knowledge-as-a-product trio.
1. agent-guardrails-field-guide
2. google-cloud-next-2026-agent-native-stack
3. gemini-enterprise-knowledge-catalog-deep-dive
4. knowledge-catalog-vs-ontologies
5. gemini-knowledge-catalog-workshop
6. knowledge-as-a-product
7. defining-the-knowledge-stack
8. comparing-knowledge-bases-semantic-overlap

### Software-engineering foundations the blog assumes
1. software-engineering-classics
2. python-beyond-the-basics
3. bash-daily-driver-ml-engineer
4. git-and-github-complete-guide
5. docker-for-ml-engineers
6. files-under-the-hood

## Cross-cutting Views

### By stack / technology
- **GCP**: gcp-ai-stack-vertex-alloydb-knowledge-pipeline, vertex-ai-gcp-ml-platform-cli, cloud-ml-infrastructure
- **Anthropic / Claude**: claude-code-complete-guide, model-context-protocol, mcp-production-enterprise, mcp-server-nl-to-powerbi-dashboard
- **LangChain / LangGraph / LlamaIndex**: langgraph-multi-agent-workflows, llamaindex-langchain-llm-frameworks
- **Neo4j / graph DBs**: knowledge-graphs-practice, ontology-to-agent-toolbox, graph-engine-internals-index-free-adjacency, gql-standard-cypher-sqlpgq, choosing-a-graph-engine-2026
- **Graph analytics / GDS**: graph-analytics-gds-execution-model, centrality-communities-in-practice, node-embeddings-fastrp-node2vec-graphsage, organizational-network-analysis-company-graph, graph-fraud-detection-rings-synthetic-identity
- **Agent platform / platform engineering**: agent-platform-control-plane-data-plane, agent-runtime-sessions-state-topology, sandboxing-agents-microvm-gvisor, mcp-registry-gateway-tool-plane, agent-golden-paths-multi-tenancy
- **dbt / warehouse modeling**: dbt-analytics-engineering, dimensional-modeling-kimball, lookml-semantic-layer-data-modeling
- **Spark / pandas / DuckDB**: apache-spark-ecosystem-guide, sql-pandas-pyspark-duckdb
- **Docker / Kubernetes**: docker-for-ml-engineers, kubernetes-minimum-subset-ml
- **PyTorch / TensorFlow**: pytorch-tensorflow-deep-learning-frameworks, ml-libraries-under-the-hood
- **Terraform / IaC**: terraform-infrastructure-as-code
- **Dataiku**: dataiku-enterprise-data-ai-ecosystem
- **ElevenLabs / voice**: elevenlabs-voice-ai-engineering

### By audience
- **ML engineers**: structuring-ml-projects, working-with-ml-models, computational-resources-ml, ml-libraries-under-the-hood, experiment-tracking-mlops
- **Data engineers**: data-engineering-fundamentals, lakehouse-architecture, apache-airflow-orchestration, dimensional-modeling-kimball, dbt-analytics-engineering
- **Backend devs entering AI**: model-context-protocol, production-llm-agents-patterns, llm-caching-four-layers, langgraph-multi-agent-workflows
- **Curious mathematicians**: anything in `curiosities/` — algebraic number theory, graph theory, Gödel, PageRank, Ramanujan, Fermat
- **Enterprise / regulated industry**: enterprise-knowledge-bases, dama-dmbok-data-governance, ai-poc-enterprise-evaluation, mcp-production-enterprise, ontology-to-agent-toolbox

### By depth
- **Intro / overview**: data-engineering-fundamentals, network-fundamentals-every-concept, software-engineering-classics, python-beyond-the-basics
- **Working knowledge**: most field-notes
- **Deep / production-grade**: rag-advanced-patterns, query-routing-agent-decisions, ontology-to-agent-toolbox, mcp-production-enterprise, fine-tuning-gemma4-lora-qlora, knowledge-graphs-practice

### By format
- **Walkthroughs with production-quality code**: query-routing-agent-decisions, ontology-to-agent-toolbox, rag-building-production-systems, langgraph-multi-agent-workflows
- **Conceptual / theory-first**: embeddings-geometry-of-meaning, the-manifold-hypothesis, scaling-laws-neural-language-models, attention-is-all-you-need
- **Survey / landscape**: enterprise-ai-platform-selection, vector-db-benchmarks, llm-benchmarks, mteb-embedding-benchmarks
- **Curiosity essays**: anything in `curiosities/`

## Author Context (for tailoring agent responses)

The author (Juan) is a Knowledge Data Engineer at a financial institution working across three lines: a vector DB PoC, lakehouse agents, and a corporate knowledge base for Personal Bank. Stack centers on GCP (Vertex, AlloyDB, BigQuery), Anthropic / Claude, Neo4j, dbt, and LangGraph.

Posts trend toward enterprise-grade concerns: governance, compliance, evaluation, observability, role-based access, ontology-driven design. The author values: derivations over hand-waving, production failure modes over happy paths, citing primary sources, and series-style posts that build on each other.

When the user asks about a topic the blog already covers: prefer pointing them to their own post first — they wrote it, they know it, the post is the artifact. Cite the slug.

## Augmentation (machine-readable, parsed by build-knowledge-base.js)

Per-post enrichment that supplements frontmatter. Edit the YAML block below to add `concepts`, `prereqs`, `teaches`, `tech`, and `depth` for any post. Posts not listed here get sensible defaults:

- `concepts` ← lowercased `tags`
- `prereqs` ← `[]`
- `teaches` ← `[]`
- `tech` ← `[]`
- `depth` ← inferred from word count (`<1500` intro, `<4000` working, else deep)

Add new entries as you publish or as you want to enrich an older post. The build script re-derives `concept_index`, `prereq_graph`, and `tech_index` from this block on every run.

```yaml
agent-platform-control-plane-data-plane:
  concepts: [agent platform, control plane versus data plane, platform layers, non-human identity, Model Armor, defence in depth, OWASP agentic top 10]
  prereqs: [agent-architecture-and-orchestration, model-context-protocol, agent-guardrails-field-guide]
  teaches: [separate control plane from data plane for agents, enumerate the platform layers an agent needs, assign ownership between platform and agent teams, place an LLM firewall without over-trusting it]
  tech: [model-armor, bedrock-agentcore, vertex-agent-engine, azure-ai-foundry, mcp]
  depth: deep

agent-runtime-sessions-state-topology:
  concepts: [turn loop, session state, checkpointing, durable execution, session affinity, idempotency, per-tenant fairness]
  prereqs: [agent-platform-control-plane-data-plane, agent-harness-build-fork-adopt-yc-qm, senior-infrastructure-distributed-systems-failure-networking]
  teaches: [choose an execution topology for agents, externalise session state, make tool calls idempotent under retry, resume a turn after failure, compare managed agent runtimes]
  tech: [bedrock-agentcore, vertex-agent-engine, azure-ai-foundry, temporal, langgraph, kubernetes]
  depth: deep

sandboxing-agents-microvm-gvisor:
  concepts: [execution isolation, microVM, gVisor, Kata Containers, cold start versus isolation, egress control, token exchange]
  prereqs: [agent-platform-control-plane-data-plane, docker-for-ml-engineers, kubernetes-minimum-subset-ml]
  teaches: [explain why a container is not a security boundary, choose between microVM and gVisor and hardened containers, control sandbox egress, keep secrets out of the sandbox, match isolation strength to trust]
  tech: [firecracker, gvisor, kata-containers, e2b, daytona, modal]
  depth: deep

mcp-registry-gateway-tool-plane:
  concepts: [MCP registry, MCP gateway, credential brokering, tool visibility as attack surface, schema drift, tool curation, supply-chain risk, tool poisoning]
  prereqs: [mcp-production-enterprise, agent-platform-control-plane-data-plane, ontology-to-agent-toolbox]
  teaches: [separate registry from gateway, design a registry entry schema, broker credentials so agents hold no secrets, version and deprecate a tool safely, curate a third-party server catalog]
  tech: [mcp, mcp-gateway, mcp-registry]
  depth: deep

agent-golden-paths-multi-tenancy:
  concepts: [platform as product, golden paths, agents as non-human persona, multi-tenancy, tenant data isolation, cost attribution, policy as code, paved road versus walled garden]
  prereqs: [agent-platform-control-plane-data-plane, mcp-registry-gateway-tool-plane, finops-llm-agents-token-economics, enterprise-agent-governance-lifecycle]
  teaches: [design a golden path for an agent team, isolate tenants sharing a knowledge base, attribute token spend to a tenant, enforce guardrails as admission control, measure platform adoption]
  tech: [kubernetes, opa, terraform, mcp]
  depth: deep

graph-fraud-detection-rings-synthetic-identity:
  concepts: [fraud rings, synthetic identity, layering, shared-attribute edges, supernode risk, graph features for gradient boosting, precision at alert budget, subgraph as explanation]
  prereqs: [centrality-communities-in-practice, node-embeddings-fastrp-node2vec-graphsage, graph-neural-networks-learning-structured-data]
  teaches: [model shared-attribute edges without creating supernodes, combine communities and embeddings with gradient boosting, decide when a GNN earns its cost, optimise for precision at the alert budget, explain a flag with a traversal path]
  tech: [neo4j, gds, xgboost, pytorch-geometric]
  depth: deep

graph-engine-internals-index-free-adjacency:
  concepts: [index-free adjacency, record layout, pointer chasing, supernode problem, traversal cost, GraphBLAS]
  prereqs: [knowledge-graphs-practice]
  teaches: [reason about traversal cost versus join cost, read a graph store record layout, diagnose supernode bottlenecks, tell native from layered graph engines]
  tech: [neo4j, falkordb]
  depth: deep

gql-standard-cypher-sqlpgq:
  concepts: [GQL, ISO/IEC 39075, SQL/PGQ, graph pattern matching, query portability, vendor lock-in]
  prereqs: [graph-engine-internals-index-free-adjacency, knowledge-graphs-practice]
  teaches: [read and write GQL, query a property graph over relational tables with SQL/PGQ, isolate vendor extensions, assess query portability]
  tech: [gql, cypher, sql, postgres]
  depth: deep

choosing-a-graph-engine-2026:
  concepts: [engine selection, workload profiling, graph-on-relational, embedded graph databases, total cost of ownership]
  prereqs: [graph-engine-internals-index-free-adjacency, gql-standard-cypher-sqlpgq, spanner-graph-for-knowledge-and-agents]
  teaches: [profile a graph workload, choose between native and embedded and managed engines, recognise when no graph database is needed, budget operational cost]
  tech: [neo4j, memgraph, falkordb, ladybugdb, cloud-spanner, neptune, puppygraph]
  depth: deep

graph-analytics-gds-execution-model:
  concepts: [graph projection, CSR representation, execution modes, memory estimation, algorithm catalog, serverless graph analytics]
  prereqs: [knowledge-graphs-practice, network-science-communities-centrality]
  teaches: [project a subgraph into memory, choose an execution mode, estimate memory before running, chain algorithms with mutate, run graph analytics on non-Neo4j sources]
  tech: [neo4j, gds, graphdatascience, aura]
  depth: deep

centrality-communities-in-practice:
  concepts: [centrality selection, approximate betweenness, personalized PageRank, resolution limit, Leiden, partition stability]
  prereqs: [graph-analytics-gds-execution-model, network-science-communities-centrality, pagerank-eigenvectors]
  teaches: [pick a centrality measure for a business question, scale betweenness with sampling, tune PageRank damping, prefer Leiden over Louvain, measure partition stability, validate communities without ground truth]
  tech: [neo4j, gds, networkx]
  depth: deep

node-embeddings-fastrp-node2vec-graphsage:
  concepts: [node embeddings, Johnson-Lindenstrauss lemma, FastRP, Node2Vec, GraphSAGE, transductive versus inductive, temporal leakage]
  prereqs: [graph-analytics-gds-execution-model, embeddings-geometry-of-meaning, graph-neural-networks-learning-structured-data]
  teaches: [choose between transductive and inductive embeddings, size an embedding dimension empirically, avoid temporal leakage in evaluation, concatenate graph embeddings with tabular features]
  tech: [neo4j, gds, pytorch-geometric]
  depth: deep

organizational-network-analysis-company-graph:
  concepts: [organizational network analysis, structural holes, E-I index, key-person risk, structural re-identification, employee analytics governance]
  prereqs: [centrality-communities-in-practice, network-science-communities-centrality, dama-dmbok-data-governance]
  teaches: [build a collaboration graph from communication metadata, weight organizational edges, read brokerage and silo measures, apply minimum aggregation thresholds, ground employee analytics in a lawful basis]
  tech: [networkx, neo4j, gds]
  depth: deep

query-routing-agent-decisions:
  concepts: [tool routing, query classification, retrieval evaluation, cascading retrieval, RAG]
  prereqs: [rag-retrieval-augmented-generation, production-llm-agents-patterns, model-context-protocol]
  teaches: [classify a question by intent, score retrieval relevance, cascade across vector and graph and SQL, evaluate the router as a model]
  tech: [anthropic-sdk, langgraph]
  depth: deep

ontology-to-agent-toolbox:
  concepts: [ontology, tool granularity, agent toolbox, OWL, role-based access, guardrails]
  prereqs: [ontologies-building-knowledge-bases, knowledge-graphs-practice, model-context-protocol]
  teaches: [scope tools by ontology class, attach guardrails to tool calls, derive tools from a schema, role-based tool access]
  tech: [neo4j, anthropic-sdk, owl]
  depth: deep

lookml-semantic-layer-data-modeling:
  concepts: [semantic layer, LookML, metric definitions, data modeling]
  prereqs: [dimensional-modeling-kimball, dbt-analytics-engineering]
  teaches: [model metrics in LookML, separate logical from physical model, version semantic definitions]
  tech: [looker, lookml, bigquery]
  depth: working

ontologies-building-knowledge-bases:
  concepts: [ontology, OWL, RDF, taxonomy, knowledge representation]
  prereqs: [knowledge-graphs-practice]
  teaches: [pick OWL vs SKOS, model classes and properties, evolve an ontology]
  tech: [protege, owl, rdf]
  depth: working

knowledge-graphs-practice:
  concepts: [knowledge graph, property graph, RDF, graph queries, entity resolution]
  prereqs: [graph-theory-mathematics-of-connections]
  teaches: [pick property graph vs RDF, model entities and relations, query with Cypher or SPARQL]
  tech: [neo4j, cypher, rdf]
  depth: deep

rag-advanced-patterns:
  concepts: [hybrid retrieval, reranking, query rewriting, multi-vector retrieval, parent-child chunking]
  prereqs: [rag-retrieval-augmented-generation, rag-building-production-systems]
  teaches: [combine BM25 with dense vectors, rerank with cross-encoders, rewrite queries, parent-child chunking]
  tech: [langchain, llamaindex]
  depth: deep

rag-building-production-systems:
  concepts: [chunking, ingestion pipeline, embedding model selection, evaluation harness]
  prereqs: [rag-retrieval-augmented-generation, embeddings-geometry-of-meaning]
  teaches: [design a chunker, build an ingestion pipeline, pick an embedding model, set up an eval harness]
  tech: [langchain, llamaindex]
  depth: deep

ragas-evaluating-rag:
  concepts: [RAG evaluation, faithfulness, answer relevance, context precision, LLM-as-judge]
  prereqs: [rag-building-production-systems, llm-as-a-judge]
  teaches: [build a RAGAS evaluation, interpret faithfulness scores, choose judge models]
  tech: [ragas, langchain]
  depth: working

production-llm-agents-patterns:
  concepts: [agent loop, tool use, error recovery, observability, guardrails]
  prereqs: [model-context-protocol]
  teaches: [structure an agent loop, handle tool failures, observe and trace agents, set guardrails]
  tech: [anthropic-sdk, langgraph]
  depth: deep

mcp-production-enterprise:
  concepts: [MCP server, enterprise integration, authentication, audit logging]
  prereqs: [model-context-protocol]
  teaches: [deploy an MCP server in an enterprise, add auth and audit, integrate with corporate identity]
  tech: [anthropic-sdk, mcp]
  depth: deep

model-context-protocol:
  concepts: [MCP, tool protocol, context sharing, server architecture]
  prereqs: []
  teaches: [understand MCP, build a basic MCP server, connect tools to Claude]
  tech: [anthropic-sdk, mcp]
  depth: working

embeddings-geometry-of-meaning:
  concepts: [embeddings, vector space, cosine similarity, manifold structure]
  prereqs: []
  teaches: [reason about embedding geometry, pick distance metrics, interpret nearest neighbors]
  tech: []
  depth: working

claude-code-complete-guide:
  concepts: [Claude Code, CLI agent, hooks, slash commands, MCP integration]
  prereqs: []
  teaches: [use Claude Code productively, configure hooks and skills, integrate MCP servers]
  tech: [claude-code, anthropic-sdk]
  depth: working

graph-neural-networks-learning-structured-data:
  concepts: [GNN, message passing, graph convolution, node classification]
  prereqs: [graph-theory-mathematics-of-connections, ml-libraries-under-the-hood]
  teaches: [implement a basic GNN, choose between GCN and GAT, train on a benchmark dataset]
  tech: [pytorch, pytorch-geometric]
  depth: deep

pagerank-eigenvectors:
  concepts: [PageRank, eigenvectors, Markov chains, power iteration]
  prereqs: [graph-theory-mathematics-of-connections]
  teaches: [derive PageRank from random walks, compute via power iteration, interpret as eigenvector]
  tech: []
  depth: working

foundations-of-agentic-ai-llms-to-agents:
  concepts: [self-attention, tokenization, context window, hallucination, temperature, chain of thought, react, self-consistency, function calling, chains vs agents, grounding, prompt engineering]
  prereqs: [attention-is-all-you-need, microgpt-reading-karpathy]
  teaches: [explain how an LLM predicts tokens, choose a prompting technique, implement function calling, distinguish a chain from an agent]
  tech: [anthropic-sdk]
  depth: deep

agent-architecture-and-orchestration:
  concepts: [router, multi-agent, manager worker, voting consensus, langgraph, conditional edges, checkpointer, breakpoints, human in the loop, max iterations, langchain tool, lcel runnable, abstraction layer]
  prereqs: [foundations-of-agentic-ai-llms-to-agents, agent-architectures-productive-patterns, langgraph-multi-agent-workflows]
  teaches: [design a router, build a cyclic langgraph, add conditional edges and checkpointers, pause for human approval, avoid vendor lock-in]
  tech: [langgraph, langchain, crewai, llamaindex, litellm]
  depth: deep

agent-memory-and-retrieval-embeddings-to-rag:
  concepts: [embeddings, cosine similarity, knn, top_k, approximate nearest neighbors, hnsw, ivf, product quantization, chunking, chunk overlap, hyde, graphrag, reranking, lost in the middle, time-aware retrieval, conversation memory, vector persistence, gdpr]
  prereqs: [foundations-of-agentic-ai-llms-to-agents, embeddings-geometry-of-meaning, rag-retrieval-augmented-generation, rag-advanced-patterns]
  teaches: [pick a similarity metric, choose an ANN index, fix boundary loss with overlap, apply HyDE and GraphRAG, filter retrieval by recency, purge vectors for GDPR]
  tech: [langchain, llamaindex, pgvector, neo4j]
  depth: deep

agent-integration-protocols-mcp-and-a2a:
  concepts: [model context protocol, mcp, agent to agent, a2a, m by n integration, tool schema, grounding, interoperability, agent card]
  prereqs: [foundations-of-agentic-ai-llms-to-agents, model-context-protocol, mcp-production-enterprise]
  teaches: [explain the MxN integration problem, contrast MCP and A2A, reason about client host server roles, design standardized tool schemas]
  tech: [mcp, anthropic-sdk, a2a]
  depth: deep

operating-agents-eval-observability-scale:
  concepts: [rag evaluation, faithfulness, context recall, context precision, answer relevance, correctness, llm as judge, golden dataset, regression testing, data contamination, determinism, seed, tracing, intermediate steps, audit logging, semantic caching, circuit breaker, queue worker, async concurrency, runaway loop, docker parity]
  prereqs: [agent-architecture-and-orchestration, ragas-evaluating-rag, llm-caching-four-layers, production-llm-agents-patterns]
  teaches: [interpret RAGAS metrics, build a regression pipeline, make a nondeterministic bug reproducible, trace an agent, scale with caching and queues and circuit breakers]
  tech: [ragas, langsmith, gptcache, redis, docker]
  depth: deep

enterprise-agents-governance-security-business:
  concepts: [prompt injection, indirect prompt injection, input railing, output railing, retrieval acls, least privilege, pii masking, presidio, gdpr, jailbreak, kill switch, proxy bias, feedback loop, human in the loop, system card, red teaming, explainability, undifferentiated heavy lifting, deflection rate, mttr, finops, ai governance]
  prereqs: [agent-memory-and-retrieval-embeddings-to-rag, operating-agents-eval-observability-scale, agent-guardrails-field-guide, enterprise-agent-governance-lifecycle]
  teaches: [defend against prompt injection with input and output rails, enforce retrieval ACLs, mask PII before logging, run a jailbreak incident protocol, detect proxy bias, choose ROI metrics over vanity metrics]
  tech: [presidio, nemo-guardrails, llama-guard]
  depth: deep

# --- Series: The Graph Layer for Agents (5 parts) ---

agent-graph-layer-why-grep-embeddings-fell-short:
  concepts: [context engine, code graph, grep limitations, embedding limitations, call graph, blast radius]
  prereqs: [knowledge-graphs-practice, model-context-protocol]
  teaches: [explain why grep and embeddings fail for code-understanding agents, define a context engine, map the five-part series]
  tech: [mcp]
  depth: deep

repo-to-graph-ast-vs-llm-extraction:
  concepts: [AST extraction, LLM extraction, repo indexing, deterministic parsing, extraction accuracy]
  prereqs: [agent-graph-layer-why-grep-embeddings-fell-short]
  teaches: [compare AST-derived and LLM-extracted code graphs, choose a deterministic indexing pipeline, evaluate extraction accuracy at repo scale]
  tech: []
  depth: deep

querying-code-graphs-blast-radius-localization:
  concepts: [blast radius, localization, PageRank-ranked context, multi-hop retrieval, call graph queries]
  prereqs: [repo-to-graph-ast-vs-llm-extraction, pagerank-eigenvectors, graph-theory-mathematics-of-connections]
  teaches: [rank context with PageRank over a call graph, localize a bug with graph queries, compute blast radius, reduce tokens via graph-ranked retrieval]
  tech: [networkx]
  depth: deep

graph-memory-temporal-agents-graphiti-cognee:
  concepts: [temporal knowledge graph, bi-temporal facts, fact invalidation, agent memory, graphiti, cognee]
  prereqs: [querying-code-graphs-blast-radius-localization, knowledge-graphs-practice]
  teaches: [model evolving and contradicting facts over time, prefer fact invalidation over deletion, evaluate Graphiti and Cognee, judge when temporal graph memory is worth the cost]
  tech: [graphiti, cognee, neo4j]
  depth: deep

graph-layer-in-production-mcp-build-vs-buy:
  concepts: [local-first architecture, MCP transport, build vs buy, graph freshness, code egress]
  prereqs: [graph-memory-temporal-agents-graphiti-cognee]
  teaches: [decide build vs buy for a code graph layer, keep a graph fresh in production, ship a graph over MCP without code egress, judge when not to graphify at all]
  tech: [mcp]
  depth: deep

# --- Series: Senior Engineering Judgment in the AI Era (5 parts) ---

senior-infrastructure-distributed-systems-failure-networking:
  concepts: [failure domains, blast radius, retry storms, thundering herd, infrastructure judgment]
  prereqs: []
  teaches: [reason about failure domains an AI coding tool will not, avoid retry-induced thundering herds, judge infrastructure trade-offs AI code generation glosses over]
  tech: []
  depth: deep

senior-data-modeling-query-patterns-database-design:
  concepts: [data modeling, query patterns, schema longevity, database design judgment]
  prereqs: [senior-infrastructure-distributed-systems-failure-networking]
  teaches: [shape a data model for years of query patterns, evaluate schema trade-offs an AI-generated CREATE TABLE hides]
  tech: []
  depth: deep

senior-api-design-contracts-versioning-dx:
  concepts: [API contracts, versioning, developer experience, REST]
  prereqs: [senior-data-modeling-query-patterns-database-design]
  teaches: [design an API as a contract rather than code, version without breaking consumers, weigh developer-experience trade-offs]
  tech: []
  depth: deep

senior-distributed-theory-cap-pacelc-tradeoffs:
  concepts: [CAP theorem, PACELC, consistency models, distributed trade-offs]
  prereqs: [senior-api-design-contracts-versioning-dx]
  teaches: [apply CAP and PACELC to a real system, spot when an AI-generated design quietly violates a consistency guarantee]
  tech: []
  depth: deep

senior-product-engineering-scale-prioritization-architecture:
  concepts: [scale judgment, prioritization, architecture as judgment, technical debt]
  prereqs: [senior-distributed-theory-cap-pacelc-tradeoffs]
  teaches: [decide what to build and how much to scale, weigh architectural trade-offs as a product discipline]
  tech: []
  depth: deep

# --- Series: Enterprise Ontology / Banking Knowledge Graph (4 parts) ---

tbox-abox-schema-facts-distinction:
  concepts: [TBox, ABox, RBox, description logic, schema/facts split]
  prereqs: [ontologies-building-knowledge-bases, knowledge-graphs-practice]
  teaches: [separate schema from facts in a production knowledge graph, decide file layout and ownership by TBox/ABox, place SHACL correctly in the pipeline]
  tech: [neo4j, rdf]
  depth: deep

modular-ontologies-core-domains-pattern:
  concepts: [core + domains pattern, modular ontology, cross-cutting concepts]
  prereqs: [tbox-abox-schema-facts-distinction]
  teaches: [split an ontology into a stable core and orbiting domain modules, derive the operational rule for the split]
  tech: [owl, rdf]
  depth: deep

ontology-production-pipeline-gcp:
  concepts: [ontology CI/CD, YAML-to-OWL compilation, competency questions as tests]
  prereqs: [modular-ontologies-core-domains-pattern]
  teaches: [put an ontology in Git as source of truth, compile YAML into OWL/SHACL/JSON-Schema, run competency questions as CI tests]
  tech: [shacl, owl, gcp]
  depth: deep

populating-knowledge-graph-llms-banking:
  concepts: [schema-embedded extraction, Pydantic repair, pySHACL validation, entity resolution, idempotent MERGE]
  prereqs: [ontology-production-pipeline-gcp]
  teaches: [extract entities with a schema-embedded prompt, repair malformed LLM output with Pydantic, validate with pySHACL, write idempotent MERGE Cypher]
  tech: [neo4j, pydantic, pyshacl, cypher]
  depth: deep

# --- Series: Knowledge Catalog & Knowledge Architecture ---

agent-guardrails-field-guide:
  concepts: [threat taxonomy, guardrail layers, blast radius reasoning]
  prereqs: []
  teaches: [build a layered guardrail defense for an agent, reason about blast radius, avoid anti-patterns that defeat guardrails]
  tech: []
  depth: deep

google-cloud-next-2026-agent-native-stack:
  concepts: [agent-native stack, Gemini Enterprise Agent Platform, agentic data cloud]
  prereqs: [agent-guardrails-field-guide]
  teaches: [map every Cloud Next 2026 announcement to what it replaces, decide what to actually adopt]
  tech: [vertex-ai, gcp]
  depth: deep

gemini-enterprise-knowledge-catalog-deep-dive:
  concepts: [Agent Platform control plane, Knowledge Catalog semantic spine, context graph]
  prereqs: [google-cloud-next-2026-agent-native-stack]
  teaches: [ground agent answers in the Knowledge Catalog, use the Agent Platform as a control plane]
  tech: [vertex-ai, dataplex]
  depth: deep

knowledge-catalog-vs-ontologies:
  concepts: [asset registry vs ontology, inferential reasoning, hybrid architecture]
  prereqs: [gemini-enterprise-knowledge-catalog-deep-dive, ontologies-building-knowledge-bases]
  teaches: [draw the boundary between a knowledge catalog and an ontology, design the honest hybrid architecture]
  tech: [owl, dataplex]
  depth: deep

gemini-knowledge-catalog-workshop:
  concepts: [catalog, enrich, search, context graph, Dataplex lineage]
  prereqs: [gemini-enterprise-knowledge-catalog-deep-dive, knowledge-catalog-vs-ontologies]
  teaches: [work catalog then enrich then search end to end, decide the catalog's boundaries against ontology, quality, and semantic layer]
  tech: [dataplex, vertex-ai]
  depth: deep

knowledge-as-a-product:
  concepts: [knowledge as a product, data mesh, ownership, SLA]
  prereqs: []
  teaches: [apply data-mesh product thinking to a knowledge base, define an owner, contract, and SLA for knowledge]
  tech: []
  depth: deep

defining-the-knowledge-stack:
  concepts: [knowledge assets, knowledge products, tools, pipelines, layered vocabulary]
  prereqs: [knowledge-as-a-product]
  teaches: [define the strata of a knowledge stack, use crisp vocabulary in org documents]
  tech: []
  depth: deep

comparing-knowledge-bases-semantic-overlap:
  concepts: [semantic overlap detection, MinHash, optimal transport, entity resolution]
  prereqs: [knowledge-as-a-product]
  teaches: [detect duplicate and overlapping knowledge bases, choose between exact-hash, MinHash, and embedding overlap methods]
  tech: [minhash]
  depth: deep

production-graph-stack-agents-mcp-ontologies:
  concepts: [pragmatic ontology, LightRAG, GraphRAG, MCP tool traversal, NL2Cypher, neurosymbolic grounding, multi-hop reasoning, indexing cost model, path recall]
  prereqs: [agent-graph-layer-why-grep-embeddings-fell-short, knowledge-graphs-practice, model-context-protocol]
  teaches: [size a pragmatic ontology and decide when to promote a property to a node, compare LightRAG and GraphRAG indexing and update costs, replace NL2Cypher with bounded MCP traversal tools, evaluate a graph RAG system with path recall and hop-stratified accuracy]
  tech: [lightrag, neo4j, mcp, qdrant]
  depth: deep

enterprise-graph-mcp-architecture-gcp:
  concepts: [transversal context engine, Cloud Spanner Graph, GQL, Dataplex Knowledge Catalog, serverless MCP, ABAC, data lineage, graph store selection]
  prereqs: [production-graph-stack-agents-mcp-ontologies, spanner-graph-for-knowledge-and-agents, mcp-production-enterprise]
  teaches: [model operational knowledge as a property graph in Cloud Spanner using GQL, choose between Spanner Graph and Neo4j and Neptune, deploy an MCP context server on Cloud Run with IAM-scoped access, budget processing units and request billing for a transversal graph, test and trace a graph MCP server]
  tech: [gcp, cloud-spanner, dataplex, cloud-run, mcp, fastmcp, opentelemetry]
  depth: deep

agent-harness-build-fork-adopt-yc-qm:
  concepts: [agent harness, harness vs framework, turn orchestration, predeclared command policy, security posture, multiplayer scoping, room as principal, deployment layer, divergence tax, context compaction, agent-computer interface]
  prereqs: [dont-reinvent-the-agent-open-source-composition, production-llm-agents-patterns, bank-grade-agent-security-iam-gateways]
  teaches: [distinguish a harness from a framework and a model, write a minimal agent loop and see what it lacks, enumerate the organizational modules a company-grade harness needs, decide between building forking and adopting at the harness layer, keep a fork upgradable with a deployment-layer boundary, test policy gates and unattended turns]
  tech: [qm, pi, opencode, claude-code, codex, postgres, fly-io, aws]
  depth: deep

dont-reinvent-the-agent-open-source-composition:
  concepts: [open-source composition, adopt vs wrap vs fork, agent control plane, structured outputs, agent memory, vector quantization, microVM sandboxing, maintenance cost, build vs buy]
  prereqs: [model-context-protocol, production-llm-agents-patterns]
  teaches: [score an open-source dependency for adopt wrap or fork, compose a six-layer agent stack from proven building blocks, estimate the 18-month maintenance bill of a self-hosted stack, validate a composed stack with contract tests and sandbox escape testing]
  tech: [mcp, fastmcp, instructor, mem0, graphiti, turbovec, e2b, ollama, gcp]
  depth: deep

google-adk-agent-development-deep-dive:
  concepts: [agent development kit, four pillar model, LlmAgent, workflow agents, BaseNode, tool authoring, session service, memory service, runner and event loop, callbacks and plugins, agent config, skills for agents, agent runtime deployment, agent evaluation]
  prereqs: [foundations-of-agentic-ai-llms-to-agents, production-llm-agents-patterns, model-context-protocol]
  teaches: [wire an ADK agent from agent tools session runner and memory, author tools in four different styles, compose multi-agent systems with workflow agents and graphs, guard an agent with callbacks and plugins, evaluate an agent with criteria and simulation, deploy to Agent Runtime Cloud Run or GKE]
  tech: [google-adk, gemini, vertex-agent-engine, gemini-enterprise, mcp, a2a, opentelemetry]
  depth: deep

adk-graph-workflows-deterministic-orchestration:
  concepts: [graph workflows, workflow runtime, START virtual node, conditional routing, typed node output, state boundaries, RetryConfig, RequestInput, human in the loop, dynamic workflows, automatic checkpointing, execution modes, task api, where determinism lives]
  prereqs: [google-adk-agent-development-deep-dive, agent-architecture-and-orchestration, langgraph-multi-agent-workflows]
  teaches: [decide per node whether a model or code makes a decision, define a graph workflow with sequential and conditional edges, pass typed data between nodes without session state writes, add retries timeouts and error recovery per node, pause a workflow for human input and resume it, choose between static graphs dynamic workflows and prebuilt workflow agents]
  tech: [google-adk, gemini, langgraph, gemini-enterprise, opentelemetry]
  depth: deep

migrating-adk-1x-to-2x:
  concepts: [breaking changes, silent failure modes, bypassed orchestration override, event schema migration, session compatibility window, BaseNode hierarchy, retry masking, staged cutover, version pinning]
  prereqs: [google-adk-agent-development-deep-dive, adk-graph-workflows-deterministic-orchestration]
  teaches: [detect the three silent breaking changes in an existing ADK codebase, migrate a persisted session and event schema, decide whether to migrate or stay on the maintained 1.x branch, run 1.x and 2.0 side by side during a cutover, avoid swallowing framework retries and human in the loop pauses in exception handlers]
  tech: [google-adk, gemini, postgres, gemini-enterprise]
  depth: deep

adk-advanced-evolution-of-agent-engineering:
  concepts: [framework as fossil record, ReAct loop, abstraction explosion, control flow reckoning, agent taxonomy, runner and event stream, session versus memory, tool trajectory scoring, framework convergence]
  prereqs: [google-adk-agent-development-deep-dive, agent-architectures-productive-patterns, langgraph-multi-agent-workflows]
  teaches: [read a framework as a record of the problems it absorbed, explain why the LLM should not own control flow, separate short-term session state from long-term memory, judge when ADK is the wrong choice, compare ADK and LangGraph on where the runtime lives]
  tech: [google-adk, langgraph, langchain, gemini, gemini-enterprise]
  depth: deep

debugging-adk-agent-flows:
  concepts: [flow errors versus code errors, silent failure, event stream as ground truth, response ownership, final response semantics, partial event accumulation, delegation that does not delegate, state delta auditing, observability plugin, trajectory evaluation, agent observability, OpenTelemetry GenAI conventions]
  prereqs: [google-adk-agent-development-deep-dive, adk-graph-workflows-deterministic-orchestration, operating-agents-eval-observability-scale]
  teaches: [tell a flow error apart from a code error before debugging, read a session event stream by hand, work out which agent owns the user facing turn, diagnose a sub-agent answer that never reached the user, audit state deltas and output_key no-ops, write a BasePlugin flow recorder, name spans so a production trace is readable, assert on the trajectory rather than the final string]
  tech: [google-adk, gemini, opentelemetry, cloud-trace, gemini-enterprise]
  depth: deep

enterprise-agent-memory-continuity-adk-geap:
  concepts: [continuity engineering, memory taxonomy, ephemeral versus durable, facts versus procedures, memory scope, context compression, model context caching, memory drift, fleet level learning, multi-tenant memory isolation]
  prereqs: [google-adk-agent-development-deep-dive, agent-memory-and-retrieval-embeddings-to-rag, gemini-enterprise-knowledge-catalog-deep-dive]
  teaches: [classify agent memory along durability and content axes, decide what to remember at which scope, keep one user memory from poisoning another, engineer durable procedures as well as durable facts, compare managed memory primitives across ADK LangGraph AgentCore and the Anthropic and OpenAI SDKs]
  tech: [google-adk, gemini-enterprise, bigquery, vertex-agent-engine, bedrock-agentcore, langgraph, anthropic-sdk]
  depth: deep
bellman-operator-is-a-contraction:
  concepts: [Bellman optimality operator, contraction mapping, Banach fixed point theorem, sup norm, value iteration, geometric convergence, discount factor as a convergence rate, policy iteration, temporal difference learning, deadly triad, projected Bellman operator]
  prereqs: [reinforcement-learning-first-principles, markov-to-hoeffding-concentration-inequalities]
  teaches: [proving the Bellman operator is a gamma contraction, proving Banach's fixed point theorem, deriving the geometric error bound for value iteration, reading the discount factor as an iteration count, explaining why function approximation destroys the convergence guarantee]
  tech: [numpy]
  depth: deep
em-never-goes-down:
  concepts: [expectation maximization, Jensen's inequality, evidence lower bound, KL divergence, monotonicity of EM, latent variable models, Gaussian mixture models, responsibilities, local optima, variational inference]
  prereqs: [loss-functions-are-probability-assumptions, one-eigendecomposition-four-algorithms]
  teaches: [proving Jensen's inequality, deriving the ELBO plus KL identity, proving EM never decreases the likelihood, stating what the monotonicity theorem does not give you, connecting EM to variational inference]
  tech: [numpy, scipy]
  depth: deep
kernel-trick-representer-theorem:
  concepts: [positive definite kernels, Gram matrix, reproducing kernel Hilbert space, reproducing property, Moore-Aronszajn theorem, representer theorem, kernel trick, support vectors, soft margin, Cauchy-Schwarz for kernels]
  prereqs: [penalizing-is-constraining, vc-dimension-sauer-shelah]
  teaches: [checking whether a function is a valid kernel, constructing an RKHS from a kernel, proving the representer theorem by orthogonal decomposition, explaining why an infinite dimensional feature space is computable, reading the three types of support vector off the KKT conditions]
  tech: [numpy, scipy]
  depth: deep
loss-functions-are-probability-assumptions:
  concepts: [maximum likelihood estimation, negative log likelihood, noise models, squared error, absolute error, cross entropy, Huber loss, least favourable distribution, generalized linear models, canonical link, influence function, proper scoring rules]
  prereqs: []
  teaches: [deriving a loss function from an assumed noise distribution, reading a loss backwards to the assumption it encodes, explaining why MAE is robust and MSE is not, recognising the shared gradient shape of canonical link models]
  tech: [numpy, scipy]
  depth: deep
markov-to-hoeffding-concentration-inequalities:
  concepts: [Markov inequality, Chebyshev inequality, Chernoff method, moment generating function, Hoeffding lemma, Hoeffding inequality, sub-Gaussian, concentration of measure, test set confidence interval, union bound, McDiarmid inequality]
  prereqs: [what-are-we-minimizing-erm-bias-variance]
  teaches: [proving Markov and deriving Chebyshev from it, applying the Chernoff exponential tilting method, proving Hoeffding's lemma, computing an honest confidence interval for a test set error rate, explaining why precision costs quadratically and confidence only logarithmically]
  tech: [numpy, scipy]
  depth: deep
no-free-lunch-theorem:
  concepts: [no free lunch theorem, inductive bias, off training set error, uniform prior over targets, PAC learnability, hypothesis class restriction, model selection as assumption selection, manifold hypothesis]
  prereqs: [vc-dimension-sauer-shelah]
  teaches: [proving the no free lunch theorem for supervised learning, distinguishing the three theorems that share the name, naming the inductive bias of a given method, correcting the common misreadings]
  tech: [numpy]
  depth: deep
one-eigendecomposition-four-algorithms:
  concepts: [spectral theorem, Courant-Fischer, singular value decomposition, Eckart-Young-Mirsky theorem, principal component analysis, kernel PCA, spectral clustering, graph Laplacian, latent semantic analysis, low rank approximation]
  prereqs: [markov-to-hoeffding-concentration-inequalities]
  teaches: [proving the spectral theorem's key facts, deriving PCA from the variational characterization, proving Eckart-Young in the Frobenius norm, recognising four algorithms as one eigendecomposition, proving the graph Laplacian quadratic form identity]
  tech: [numpy, scipy]
  depth: deep
penalizing-is-constraining:
  concepts: [regularization, KKT conditions, convex optimization, ridge regression, lasso, soft thresholding, subgradient, shrinkage, sparsity, quadratic form, condition number]
  prereqs: [no-free-lunch-theorem, what-are-we-minimizing-erm-bias-variance]
  teaches: [proving that a penalty and a hard constraint define the same problem, stating and applying the KKT conditions, deriving the soft threshold formula, explaining why L1 gives exact zeros and L2 never does, naming the assumption each penalty encodes]
  tech: [numpy, scipy]
  depth: deep
probably-approximately-correct:
  concepts: [PAC learning, sample complexity, realizable case, agnostic case, uniform convergence, union bound, axis aligned rectangles, Occam's razor, description length, efficient PAC learnability, 3-term DNF]
  prereqs: [markov-to-hoeffding-concentration-inequalities]
  teaches: [stating PAC learnability formally, proving the axis aligned rectangle sample bound, deriving the finite hypothesis class bound, proving the agnostic uniform convergence bound, separating sample complexity from computational complexity]
  tech: [numpy]
  depth: deep
vc-dimension-sauer-shelah:
  concepts: [VC dimension, shattering, growth function, Sauer-Shelah lemma, symmetrization, ghost sample, VC generalization bound, fundamental theorem of statistical learning, Radon's theorem, Rademacher complexity]
  prereqs: [probably-approximately-correct]
  teaches: [computing the VC dimension of a hypothesis class in both directions, proving the Sauer-Shelah lemma by induction, explaining the polynomial versus exponential growth dichotomy, stating the fundamental theorem of statistical learning, explaining why VC bounds are vacuous for deep networks]
  tech: [numpy]
  depth: deep
weak-learnability-equals-strong:
  concepts: [weak learnability, strong learnability, boosting, AdaBoost, exponential loss, coordinate descent, margin theory, training error bound, label noise, gradient boosting]
  prereqs: [probably-approximately-correct, penalizing-is-constraining]
  teaches: [deriving AdaBoost as coordinate descent on the exponential loss, deriving the alpha update, proving the exponential training error bound, explaining why test error falls after training error reaches zero, naming the three real limits of boosting]
  tech: [numpy]
  depth: deep
what-are-we-minimizing-erm-bias-variance:
  concepts: [empirical risk minimization, true risk, approximation error, estimation error, optimization error, bias variance decomposition, Bayes error, noise floor, model complexity, double descent]
  prereqs: [loss-functions-are-probability-assumptions]
  teaches: [distinguishing the approximation estimation split from the bias variance decomposition, proving the bias variance decomposition for squared loss, explaining why there is no clean 0-1 loss analogue, identifying which lever moves which error term]
  tech: [numpy]
  depth: deep

backprop-is-reverse-mode-differentiation:
  concepts: [backpropagation, reverse-mode automatic differentiation, computational graph, adjoint, chain rule, cheap gradient principle, Baur-Strassen, activation checkpointing, weight initialization, Xavier initialization, He initialization, condition number]
  prereqs: [what-are-we-minimizing-erm-bias-variance, penalizing-is-constraining]
  teaches: [deriving the delta recursion from the chain rule, explaining why reverse mode costs one sweep per output and forward mode one per input, stating the cheap gradient principle and its memory cost, deriving Xavier and He initialization from a variance recursion]
  tech: [numpy]
  depth: deep

double-descent:
  concepts: [double descent, interpolation threshold, benign overfitting, implicit regularization, minimum-norm interpolant, random labels, neural tangent kernel, norm-based bounds, margin bounds, vacuous bounds]
  prereqs: [what-are-we-minimizing-erm-bias-variance, vc-dimension-sauer-shelah, penalizing-is-constraining]
  teaches: [explaining why fitting random labels makes data-independent bounds vacuous, describing the double descent curve and locating the interpolation threshold, proving that gradient descent from zero finds the minimum-norm interpolant in the linear case, naming what replaces classical capacity bounds]
  tech: [numpy]
  depth: deep

universal-approximation-and-what-it-does-not-give-you:
  concepts: [universal approximation theorem, density in function space, discriminatory activation, Hahn-Banach, Riesz representation, Barron class, depth separation, expressivity versus learnability, nonconstructive proof]
  prereqs: [vc-dimension-sauer-shelah, no-free-lunch-theorem]
  teaches: [stating universal approximation precisely as a density result, reading what an existence proof does not provide, connecting expressivity to the VC bound, explaining depth separation theorems]
  tech: [numpy]
  depth: deep

the-objective-has-a-shape:
  concepts: [condition number, quadratic form, Hessian, curvature, saddle points, convex optimization, Lagrange duality, shadow price, KKT conditions, Fenchel conjugate, dual norm, orthogonal projection, singular value decomposition, effective rank, preconditioning, Danskin's theorem, sharp versus flat minima]
  prereqs: []
  teaches: [reading the condition number off a design matrix and predicting the iteration count, deriving the gradient descent contraction rate for a quadratic, classifying a critical point from the Hessian spectrum, recognising feature scaling and batch norm and ridge and Adam as one intervention on conditioning, interpreting a Lagrange multiplier as the sensitivity of the optimum to its constraint, diagnosing a training pathology from the geometry of the objective]
  tech: [numpy, scipy]
  depth: deep

the-distribution-has-a-shape:
  concepts: [conditional expectation, orthogonal projection, Hilbert space, covariance matrix, Mahalanobis distance, whitening, exponential family, sufficient statistics, maximum entropy, change of variables, Jacobian determinant, law of large numbers, central limit theorem, KL divergence, Fisher information, natural gradient, Cramer-Rao bound, maximum likelihood asymptotics, Bayes rule, concentration of measure, curse of dimensionality, Johnson-Lindenstrauss lemma]
  prereqs: [the-objective-has-a-shape]
  teaches: [proving the conditional mean is the L2 projection and recognising it as the normal equations, reading a covariance matrix as an ellipsoid and Mahalanobis distance as a change of metric, naming the constraint each exponential family maximises entropy under, deriving Fisher information as the Hessian of the KL divergence, explaining why a confidence interval width is a curvature measurement, predicting where nearest neighbour search degrades from the dimension alone]
  tech: [numpy, scipy]
  depth: deep

the-representation-has-a-shape:
  concepts: [anisotropy, representation degeneration, narrow cone, cosine similarity, whitening, all-but-the-top, alignment and uniformity, contrastive learning, intrinsic dimension, effective rank, superposition, linear representation hypothesis, polysemanticity, sparse autoencoders, Johnson-Lindenstrauss lemma, hyperbolic embeddings, Poincare ball, volume growth, curvature of a space, orthogonal Procrustes, centered kernel alignment, platonic representation hypothesis]
  prereqs: [the-distribution-has-a-shape, the-objective-has-a-shape, embeddings-geometry-of-meaning]
  teaches: [measuring anisotropy in an embedding space and repairing it by whitening, reading a contrastive loss as a specification of geometry on the hypersphere, estimating intrinsic dimension and knowing when the estimate is biased, deriving the packing bound that makes superposition possible, explaining why a hierarchy cannot embed in Euclidean space without distortion, choosing the curvature of an embedding space to match the structure of the data, comparing two representation spaces with Procrustes and CKA]
  tech: [numpy, scipy, scikit-learn]
  depth: deep

```

<!-- AUTO-CATALOG:START - regenerated by build-knowledge-base.js, do not edit by hand -->

## Full Post Catalog

Auto-generated index of every post by category, sorted most recent first. Use this when you need a complete inventory of what the blog covers — for example, when loaded as Claude Project knowledge and you cannot query `posts.json`.

### curiosities (1 post)

- **`100-posts-knowledge-graph-retrospective`** *(deep)* — 100 Posts as a Knowledge Graph: A Retrospective in Network Science. When you write 99 posts and then plot the result as a graph, the picture is not what you thought you were drawing. This is post number 100, and instead of a victory lap I ran the corpus through networkx: 99 nodes, 685k words, 223 tags, 2,408 tag-tag edges. What the structure reveals is more interesting than the chronology. There is a spine, four-and-a-half communities, a long tail of singleton tags that I tagged once and forgot, a handful of bridge posts holding the graph together, and a measurable bias toward production over theory. This is the blog reading itself, with real numbers, real cluster names, and the uncomfortable parts left in. Concepts: knowledge graphs, graph theory, mathematics, algorithms, software engineering, best practices.

<!-- AUTO-CATALOG:END -->
