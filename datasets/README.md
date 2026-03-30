# Datasets

## Our experiment data (included in repo)

| File | Experiment | Description |
|------|-----------|-------------|
| `adversarial_poisoned.json` | Exp 3 | 30 poisoned descriptions, MCPTox vocab removed |
| `adversarial_poisoned_v2.json` | Exp 4 | 30 poisoned, diverse writing styles (5.4% vocab overlap) |
| `adversarial_poisoned_v3.json` | — | 30 poisoned, ultra-stealthy (no security keywords) |
| `hard_clean.json` | Exp 5a (v1) | 30 safe descriptions, same-topic as poisoned |
| `hard_poisoned.json` | Exp 5a (v1) | 30 poisoned descriptions, same-topic as clean |
| `hard_v2_clean.json` | **Exp 5a** | **20 safe descriptions, same vocabulary as poisoned** |
| `hard_v2_poisoned.json` | **Exp 5a** | **20 malicious descriptions, same vocabulary as clean** |
| `hard_v3_clean.json` | **Exp 5b** | **100 safe descriptions (8 categories)** |
| `hard_v3_poisoned.json` | **Exp 5b** | **100 malicious descriptions (8 categories)** |
| `hard_v3_matched_clean.json` | — | Length-matched subset of v3 (8 pairs within 20 chars) |
| `hard_v3_matched_poisoned.json` | — | Length-matched subset of v3 |
| `neutral_clean.json` | Control test | 15 clean descriptions without reassurance patterns |
| `neutral_poisoned.json` | Control test | 15 poisoned descriptions without additive patterns |
| `hard_v2_clean_no_reassurance.json` | Control test | 20 clean descriptions, no reassurance clauses |
| `mcptox_clean_descriptions_labeled.json` | Exp 2 | 362 clean descriptions extracted from MCPTox servers |
| `mcptox_poisoned_descriptions_labeled.json` | Exp 2 | 485 poisoned descriptions from MCPTox, labeled |

## External data (auto-cloned by notebook)

| Source | Experiment | How to get |
|--------|-----------|------------|
| MCPTox-Benchmark | Exp 1-2 | `git clone https://github.com/zhiqiangwang4/MCPTox-Benchmark.git` |

The notebook `research/reproduce-experiments.ipynb` will auto-clone MCPTox if not present.
