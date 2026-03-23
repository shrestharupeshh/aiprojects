# ═══════════════════════════════════════════════════════════════════════
# CLAUDE CODE PROMPT: BUILD RUPESH'S LIFE OS IN NOTION
# ═══════════════════════════════════════════════════════════════════════
#
# This is a complete implementation specification for building my
# Life Operating System in Notion using the Notion API via MCP.
#
# CONTEXT: I am Rupesh Shrestha, a mechanical engineer at VPE Thermal
# in Sacramento, CA. I am building a comprehensive Life OS in Notion
# to manage my work, fitness, content creation, PhD preparation,
# AI learning, digital products, travel, relationships, and daily life.
#
# You have access to my Notion workspace via MCP (Model Context Protocol).
# Build everything specified below — databases, properties, views,
# sample data, relations, templates, and the Command Center dashboard.
#
# ═══════════════════════════════════════════════════════════════════════

## HIGH-LEVEL TASK

Build the following in my Notion workspace, in this exact order:

1. Create 13 top-level pages in the sidebar
2. Create 14 databases with all specified properties
3. Populate each database with starter data
4. Set up relations between databases
5. Create views for each database
6. Build the Command Center dashboard page with linked database views
7. Create template pages for Weekly Review, Monthly Review
8. Verify everything is connected and working

## IMPORTANT RULES

- Use the Notion MCP tools available to you (search, create pages, create databases, update pages, query databases, etc.)
- Create databases as INLINE databases inside their parent pages
- Use EXACT property names, types, and select options as specified
- Use emoji prefixes on page titles exactly as shown
- Do NOT skip any database or property — build everything
- After creating each database, populate it with the starter data entries
- After all databases exist, create the relation properties that link them
- Work methodically: create one database at a time, verify it, then move to the next

---

## PHASE 1: CREATE TOP-LEVEL PAGES

Create these pages in my Notion workspace as top-level sidebar pages, in this order:

```
1.  ⌘ Command Center
2.  📥 Inbox
3.  ✅ Tasks
4.  🎯 Goals
5.  💪 Fitness
6.  🎥 Content Engine
7.  🎓 PhD & Research
8.  🤖 AI Lab
9.  💰 Digital Products
10. ✈️ Travel
11. 📓 Journal
12. 👥 People
13. 📋 Templates
```

---

## PHASE 2: CREATE DATABASES WITH PROPERTIES

### DATABASE 1: 📥 Inbox
**Location:** Inline database inside the "📥 Inbox" page
**Purpose:** Zero-friction capture for all thoughts, ideas, links, tasks

| Property Name | Type | Select Options (if applicable) |
|---|---|---|
| Name | Title | — |
| Type | Select | 💡 Idea, ✅ Task, 🎥 Content, 🎓 Research, 💰 Product, ✈️ Travel, 🔗 Link, 💭 Thought |
| Processed | Checkbox | — |
| Notes | Rich Text | — |
| Captured | Created Time | — |

**Starter Data (create these entries):**

| Name | Type | Processed |
|---|---|---|
| Research Worldpackers for hostel work exchange programs | 🔗 Link | No |
| Content idea: "5 AI prompts I use for FEA reports" | 🎥 Content | No |
| Look into Chase Sapphire Preferred travel card | 💭 Thought | No |
| Schedule Yosemite weekend trip with friends | ✈️ Travel | No |
| Draft outline for AI Prompt Pack lead magnet | 💰 Product | No |
| Read paper: Deep Learning for Plant Phenotyping | 🎓 Research | No |
| Buy resistance bands for muscle-up progression | ✅ Task | No |
| Test Claude API for automated weekly review | 💡 Idea | No |

---

### DATABASE 2: ✅ Tasks
**Location:** Inline database inside the "✅ Tasks" page

| Property Name | Type | Select Options |
|---|---|---|
| Task | Title | — |
| Status | Select | 🔴 Not Started, 🟡 In Progress, ⏳ Waiting, ✅ Done, 📁 Archived |
| Priority | Select | 🔥 P1, ⚡ P2, 💤 P3 |
| Domain | Select | 💼 Work, 💪 Fitness, 🎥 Content, 🎓 PhD, 🤖 AI, 💰 Finance, 🔧 Admin, 📦 Products, ✈️ Travel, 🌿 Personal |
| Due Date | Date | — |
| Effort | Select | 15 min, 30 min, 1 hr, 2 hr, Half-day |
| Energy | Select | 🔺 High, ➖ Medium, 🔻 Low |
| Recurring | Checkbox | — |
| Notes | Rich Text | — |

**Relations to add AFTER all databases are created:**
- "Goal" → Relation to 🎯 Goals database

**Starter Data:**

| Task | Status | Priority | Domain | Due Date | Effort |
|---|---|---|---|---|---|
| Review HTC boundary conditions for GE Vernova project | 🟡 In Progress | 🔥 P1 | 💼 Work | (today) | 2 hr |
| Draft LinkedIn post: 5 AI prompts for FEA | 🔴 Not Started | 🔥 P1 | 🎥 Content | (today) | 1 hr |
| Read CEA lighting paper — Section 3 | 🔴 Not Started | ⚡ P2 | 🎓 PhD | (tomorrow) | 1 hr |
| Log gym session in training log | 🔴 Not Started | ⚡ P2 | 💪 Fitness | (today) | 15 min |
| Test n8n connection to Notion API | 🔴 Not Started | 💤 P3 | 🤖 AI | (end of week) | 1 hr |
| Update Excel Finance OS with March data | 🔴 Not Started | 💤 P3 | 💰 Finance | (end of week) | 30 min |
| Write weekly review | 🔴 Not Started | ⚡ P2 | 🌿 Personal | (Sunday) | 30 min |
| Meal prep for the week | 🔴 Not Started | ⚡ P2 | 💪 Fitness | (Saturday) | 2 hr |
| Set up Travel Fund auto-transfer in Chase | 🔴 Not Started | ⚡ P2 | ✈️ Travel | (end of week) | 30 min |
| Research Chase Sapphire Preferred card | 🔴 Not Started | 💤 P3 | 💰 Finance | (next week) | 30 min |
| Process all inbox items | 🔴 Not Started | 🔥 P1 | 🌿 Personal | (Sunday) | 30 min |
| Start writing AI Prompt Pack for MechE | 🔴 Not Started | ⚡ P2 | 📦 Products | (this week) | 2 hr |

---

### DATABASE 3: 🎯 Goals
**Location:** Inline database inside the "🎯 Goals" page

| Property Name | Type | Select Options |
|---|---|---|
| Goal | Title | — |
| Timeframe | Select | 2026 Annual, Q2 2026, Q3 2026, Q4 2026 |
| Domain | Select | (same domain options as Tasks) |
| Status | Select | 🟢 Active, ✅ Achieved, ⏸ Deferred, ❌ Missed |
| Key Results | Rich Text | — |
| Progress | Number (0-100) | — |
| Reflection | Rich Text | — |

**Relations to add AFTER all databases are created:**
- "Tasks" → Relation to ✅ Tasks database (reverse of the Goal relation on Tasks)

**Starter Data:**

| Goal | Timeframe | Domain | Status | Key Results | Progress |
|---|---|---|---|---|---|
| Ship first free digital product (AI Prompt Pack) | Q2 2026 | 📦 Products | 🟢 Active | Published on Gumroad, 50+ downloads in 30 days | 20 |
| Publish 8 LinkedIn posts this quarter | Q2 2026 | 🎥 Content | 🟢 Active | 2 posts/week for 4 weeks minimum | 10 |
| Achieve 3 clean muscle-ups | Q3 2026 | 💪 Fitness | 🟢 Active | Film and verify full ROM, no kipping | 15 |
| Complete LED research paper outline | Q3 2026 | 🎓 PhD | 🟢 Active | Full outline with 15+ papers reviewed | 10 |
| Use Life OS daily for 30 consecutive days | Q2 2026 | 🌿 Personal | 🟢 Active | Open Command Center every morning, weekly review every Sunday | 5 |
| Save $2,000 in Travel Fund | 2026 Annual | ✈️ Travel | 🟢 Active | Auto-transfer $200/month, track in monthly review | 0 |
| Complete 1 domestic trip | Q2 2026 | ✈️ Travel | 🟢 Active | Yosemite, Big Sur, or Pacific Northwest weekend | 0 |
| Build 3 n8n automations | Q3 2026 | 🤖 AI | 🟢 Active | Morning briefing, birthday reminders, weekly review pre-briefing | 0 |

---

### DATABASE 4: 💪 Training Log
**Location:** Inline database inside the "💪 Fitness" page

| Property Name | Type | Select Options |
|---|---|---|
| Session | Title | — |
| Date | Date | — |
| Type | Select | 🏋️ Gym, 🏃 Run, 🤸 Calisthenics Park, 🏠 Home |
| Focus | Multi-Select | Push, Pull, Legs, Core, Skill, Cardio |
| Duration (min) | Number | — |
| Exercises | Rich Text | — |
| RPE | Select | 6, 7, 8, 9, 10 |
| Notes | Rich Text | — |

**Starter Data:**

| Session | Date | Type | Focus | Duration | RPE | Notes |
|---|---|---|---|---|---|---|
| Upper Push + Muscle-Up Drills | 2026-03-20 | 🏋️ Gym | Push, Skill | 75 | 8 | Good explosive pull-ups. False grip strength improving. 3x5 weighted dips. Practiced high pulls to chest. |
| 5K Recovery Run | 2026-03-19 | 🏃 Run | Cardio | 32 | 6 | Easy pace around the neighborhood. Felt smooth. |
| Pull + Core | 2026-03-18 | 🏋️ Gym | Pull, Core | 65 | 7 | 15 pull-ups clean. Dragon flag progressions 3x5. Barbell rows 3x8. Hanging leg raises. |
| Calisthenics Park Session | 2026-03-15 | 🤸 Calisthenics Park | Push, Pull, Skill | 90 | 8 | Bar work: muscle-up negatives, L-sits, dips. Handstand wall walks. Good session. |
| Leg Day + Run Intervals | 2026-03-14 | 🏋️ Gym | Legs, Cardio | 70 | 7 | Squats 3x8, Romanian DL 3x8, lunges. Finished with 4x400m intervals. |

---

### DATABASE 5: 💪 Skill Tracker
**Location:** Inline database inside the "💪 Fitness" page (below Training Log)

| Property Name | Type | Select Options |
|---|---|---|
| Skill | Title | — |
| Current Level | Rich Text | — |
| Next Milestone | Rich Text | — |
| Progress (%) | Number (0-100) | — |
| Prerequisites | Rich Text | — |
| Notes | Rich Text | — |

**Starter Data:**

| Skill | Current Level | Next Milestone | Progress | Prerequisites |
|---|---|---|---|---|
| Muscle-Up | 15 pull-ups, explosive pull to chest height | Band-assisted muscle-up x3 clean reps | 35 | High pull-ups, straight bar dips, false grip hangs |
| Handstand | Wall handstand hold 45s | Freestanding hold 10 seconds | 25 | Shoulder mobility, wall walks, kick-ups, wrist prep |
| Front Lever | Tuck hold 12 seconds | Advanced tuck hold 10 seconds | 20 | Inverted rows, dragon flags, active hang, tuck holds |
| Back Lever | German hang comfortable | Tuck back lever hold 8 seconds | 15 | Skin the cats, german hangs, shoulder flexibility |
| Planche | Planche lean 20 seconds | Tuck planche 3 seconds | 10 | Pseudo planche push-ups, L-sits, wrist conditioning |
| Human Flag | Not started | Clutch flag hold 3 seconds | 0 | Side planks, one-arm hangs, oblique strength |

---

### DATABASE 6: 🎥 Content Engine
**Location:** Inline database inside the "🎥 Content Engine" page

| Property Name | Type | Select Options |
|---|---|---|
| Title | Title | — |
| Status | Select | 💡 Idea, 🔍 Researching, ✍️ Scripting, 🎥 Shooting, ✂️ Editing, 📅 Scheduled, ✅ Published, 📁 Archived |
| Platform | Multi-Select | LinkedIn, Instagram, YouTube, X, Blog |
| Format | Select | Reel, Carousel, Post, Article, Short, Video, Thread |
| Theme | Select | Engineering, AI & Future, Fitness, Nutrition, Self-Improvement, Career, Personal Story, Travel |
| Hook | Rich Text | — |
| Script | Rich Text | — |
| Publish Date | Date | — |
| Performance | Select | 🔴 Low, 🟡 Medium, 🟢 High, 🚀 Viral |
| Notes | Rich Text | — |

**Relations to add AFTER all databases are created:**
- "Product Link" → Relation to 💰 Digital Products database

**Starter Data:**

| Title | Status | Platform | Format | Theme | Hook |
|---|---|---|---|---|---|
| 5 AI Prompts I Use Every Week for FEA Reports | ✍️ Scripting | LinkedIn | Post | Engineering | Stop writing FEA reports from scratch. Here are 5 prompts that save me 2 hours every week. |
| My Morning Routine as a Mechanical Engineer | 💡 Idea | Instagram, YouTube | Reel | Self-Improvement | — |
| Why Mechanical Engineers Should Learn AI Now | 💡 Idea | LinkedIn | Article | AI & Future | — |
| Calisthenics Progress Update — Month 3 | 💡 Idea | Instagram | Reel | Fitness | — |
| How I Use Claude AI at Work Every Day | 🔍 Researching | LinkedIn, X | Thread | AI & Future | I've been using AI daily at my engineering job for 6 months. Here's what actually changed. |
| From Nepal to Sacramento — My Engineering Journey | 💡 Idea | LinkedIn, Instagram | Carousel | Personal Story | — |
| How I'm Building a Life OS with Notion + AI | 💡 Idea | LinkedIn | Article | AI & Future | — |
| Budget Travel Guide for Working Engineers | 💡 Idea | LinkedIn, Instagram | Carousel | Travel | You don't need to be rich to travel. You need a system. |
| What FEA Actually Is (Explained Simply) | 💡 Idea | LinkedIn, YouTube | Video | Engineering | — |
| The AI Prompt Pack That Saves Me 10 Hours/Week | 💡 Idea | LinkedIn | Post | AI & Future | — |

---

### DATABASE 7: 🎓 Programs & Faculty
**Location:** Inline database inside the "🎓 PhD & Research" page

| Property Name | Type | Select Options |
|---|---|---|
| University | Title | — |
| Program | Rich Text | — |
| Faculty | Rich Text | — |
| Research Focus | Rich Text | — |
| Fit | Select | 🟢 Strong, 🟡 Medium, 🔴 Weak |
| Status | Select | Researching, Contacted, Applying, Applied, Accepted, Rejected |
| Deadline | Date | — |
| Funding | Select | RA, TA, Fellowship, Unknown |
| Notes | Rich Text | — |
| Link | URL | — |

**Starter Data:**

| University | Program | Faculty | Research Focus | Fit | Status | Deadline |
|---|---|---|---|---|---|---|
| Cornell University | Biological & Environmental Engineering | Dr. Manoj Karkee | Agricultural Robotics, AI, Computer Vision | 🟢 Strong | Contacted | 2026-12-01 |
| UC Davis | Biological & Agricultural Engineering | TBD — researching | Controlled Environment Agriculture, Plant Science | 🟢 Strong | Researching | 2026-12-15 |
| University of Arizona | Agricultural & Biosystems Engineering | TBD — researching | CEA, Sensing, Arid Agriculture | 🟡 Medium | Researching | 2026-12-01 |
| Purdue University | Agricultural & Biological Engineering | TBD — researching | Agricultural Engineering, AI, Automation | 🟡 Medium | Researching | 2026-12-01 |
| Penn State | Agricultural & Biological Engineering | TBD — researching | CEA Systems, Greenhouse Engineering | 🟡 Medium | Researching | 2027-01-01 |

---

### DATABASE 8: 🎓 Paper Reading List
**Location:** Inline database inside the "🎓 PhD & Research" page (below Programs)

| Property Name | Type | Select Options |
|---|---|---|
| Paper Title | Title | — |
| Authors | Rich Text | — |
| Topic | Multi-Select | CEA, Hydroponics, Vertical Farming, AI-Ag, Sensing, Thermal, Optimization, Robotics, LED Lighting |
| Status | Select | 📚 To Read, 📖 Reading, ✅ Read, 📝 Summarized |
| Key Takeaways | Rich Text | — |
| Relevance | Select | 🔥 High, ⚡ Medium, 💤 Low |
| Link | URL | — |

**Starter Data:**

| Paper Title | Topic | Status | Relevance |
|---|---|---|---|
| Deep Learning for Plant Phenotyping: A Review | AI-Ag, Sensing | 📚 To Read | 🔥 High |
| Thermal Management of LED Grow Lights in Vertical Farms | Thermal, LED Lighting, CEA | 📖 Reading | 🔥 High |
| Optimization of Vertical Farm Energy Systems | Vertical Farming, Optimization | 📚 To Read | 🔥 High |
| Machine Learning for Crop Yield Prediction: A Survey | AI-Ag, Optimization | 📚 To Read | ⚡ Medium |
| Hydroponic Nutrient Management with IoT Sensors | Hydroponics, Sensing | 📚 To Read | ⚡ Medium |
| Robot-Assisted Harvesting in Controlled Environments | Robotics, CEA | 📚 To Read | ⚡ Medium |

---

### DATABASE 9: 🤖 AI Lab
**Location:** Inline database inside the "🤖 AI Lab" page

| Property Name | Type | Select Options |
|---|---|---|
| Name | Title | — |
| Category | Select | 🔧 Tool, 🧠 Concept, 🧪 Experiment, 📝 Prompt, ⚙️ Workflow, 🤖 Agent Idea |
| Domain | Multi-Select | Personal, Engineering, Content, Research, Finance, Products, Travel |
| Status | Select | 📋 To Explore, 🔍 Exploring, ✅ Tested, ⭐ Integrated, 📁 Archived |
| Verdict | Select | 🚀 Game-Changer, 👍 Useful, 👎 Skip |
| Notes | Rich Text | — |
| Link | URL | — |

**Starter Data:**

| Name | Category | Domain | Status | Verdict | Notes |
|---|---|---|---|---|---|
| Claude for FEA report writing | ⚙️ Workflow | Engineering | ⭐ Integrated | 🚀 Game-Changer | Saves 1-2 hours per report. Prompt structures the analysis section, results interpretation, and recommendations. |
| n8n weekly review automation | 🧪 Experiment | Personal | 📋 To Explore | — | Build after 4 weeks of manual weekly reviews. Pulls task stats from Notion API. |
| LangGraph multi-agent tutorial | 🧠 Concept | Products | 🔍 Exploring | — | Potential for building product development agents. Following LangChain docs. |
| Cursor AI for code editing | 🔧 Tool | Engineering, Products | 📋 To Explore | — | AI-powered code editor. Could speed up scripting and automation work. |
| Content hook generator prompt | 📝 Prompt | Content | ✅ Tested | 👍 Useful | Works well with Claude. Give it a topic and audience, generates 10 hooks with different angles. |
| Claude for email drafting | ⚙️ Workflow | Personal, Engineering | ⭐ Integrated | 👍 Useful | Draft professional emails, PhD outreach, vendor communications. |
| Semantic Scholar API paper finder | 🧪 Experiment | Research | ✅ Tested | 👍 Useful | Python script to search for papers by keyword and filter by recency. Already built. |
| Claude MCP for Notion automation | 🧠 Concept | Personal | 🔍 Exploring | — | Using Claude Code with Notion MCP to build and manage this Life OS. |

---

### DATABASE 10: 💰 Digital Products
**Location:** Inline database inside the "💰 Digital Products" page

| Property Name | Type | Select Options |
|---|---|---|
| Product | Title | — |
| Status | Select | 💡 Idea, 🔍 Validating, 📝 Outlining, 🔨 Building, 🧪 Beta, 🚀 Launched, 🔄 Iterating, ⚰️ Retired |
| Category | Select | Prompt Pack, Template, Guide, Course, Checklist, Tool, App |
| Tier | Select | 🆓 Free Lead Magnet, 💵 Low ($5-25), 💰 Mid ($25-100), 💎 Premium ($100+) |
| Audience | Rich Text | — |
| Problem | Rich Text | — |
| Impact (1-5) | Number | — |
| Ease (1-5) | Number | — |
| Signal (1-5) | Number | — |
| Priority Score | Formula | prop("Impact (1-5)") + prop("Ease (1-5)") + prop("Signal (1-5)") |
| Revenue | Number | — |
| Launch Date | Date | — |
| Notes | Rich Text | — |

**Relations to add AFTER all databases are created:**
- "Content" → Relation to 🎥 Content Engine (reverse of Product Link on Content Engine)

**Starter Data:**

| Product | Status | Category | Tier | Audience | Problem | Impact | Ease | Signal |
|---|---|---|---|---|---|---|---|---|
| AI Prompt Pack for Mechanical Engineers | 🔨 Building | Prompt Pack | 🆓 Free Lead Magnet | Early-career mechanical engineers | Don't know how to use AI practically at work | 4 | 5 | 4 |
| Engineering Career Growth Guide | 💡 Idea | Guide | 🆓 Free Lead Magnet | ME students and recent graduates | No practical, honest career guidance from working engineers | 4 | 4 | 4 |
| Notion Life OS Template | 💡 Idea | Template | 💵 Low ($5-25) | Ambitious engineers and creators | No unified system for managing multi-domain life | 4 | 3 | 3 |
| Beginner's Guide to FEA | 🔍 Validating | Guide | 💵 Low ($5-25) | ME students learning simulation | University FEA courses are too theoretical, not practical | 5 | 2 | 4 |
| AI Workflow Templates for Engineers | 💡 Idea | Prompt Pack | 💵 Low ($5-25) | Engineers starting to adopt AI tools | Don't know where to start with AI in engineering workflows | 4 | 4 | 3 |
| Calisthenics Progression Roadmap | 💡 Idea | Guide | 🆓 Free Lead Magnet | Beginners wanting calisthenics skills | No clear progression path from basics to advanced skills | 3 | 4 | 3 |
| SolidWorks Quick-Reference Cheatsheet | 💡 Idea | Checklist | 🆓 Free Lead Magnet | ME students and new SolidWorks users | Common commands and workflows scattered across tutorials | 3 | 5 | 3 |
| Mini-Course: FEA for Product Design | 💡 Idea | Course | 💰 Mid ($25-100) | Working engineers wanting practical FEA skills | Gap between academic FEA and real-world application | 5 | 1 | 3 |

---

### DATABASE 11: ✈️ Trips
**Location:** Inline database inside the "✈️ Travel" page

| Property Name | Type | Select Options |
|---|---|---|
| Trip Name | Title | — |
| Destination | Rich Text | — |
| Status | Select | 💭 Dreaming, 📝 Planning, ✅ Booked, ✈️ In Progress, ✅ Completed, ❌ Cancelled |
| Type | Select | Home Visit, Road Trip, Nature, Academic, Conference, Work, Backpacking, Cultural, Volunteering |
| Dates | Date (range) | — |
| Budget (Planned) | Number | — |
| Budget (Actual) | Number | — |
| Funding Source | Multi-Select | Savings, Work Travel, Conference Grant, Scholarship, Content Revenue, Product Revenue, Hostel Work Exchange, Volunteering, Credit Card Points, Sponsor |
| Priority | Select | 🔥 High, ⚡ Medium, 💤 Low |
| Accommodation | Select | Hostel, Hotel, Airbnb, Camping, Couchsurfing, Friend/Family, Work Exchange, Volunteer Housing |
| Transport | Select | Flight, Drive, Bus, Train, Combo |
| Content Opportunity | Checkbox | — |
| Packing List | Rich Text | — |
| Pre-Trip Tasks | Rich Text | — |
| Notes | Rich Text | — |
| Rating | Select | ⭐⭐⭐⭐⭐, ⭐⭐⭐⭐, ⭐⭐⭐, ⭐⭐, ⭐ |
| Key Takeaway | Rich Text | — |

**Relations to add AFTER all databases are created:**
- "Content" → Relation to 🎥 Content Engine

**Starter Data:**

| Trip Name | Destination | Status | Type | Budget | Priority | Funding Source | Content Opportunity |
|---|---|---|---|---|---|---|---|
| Nepal Home Visit 2026 | Kathmandu + Pokhara, Nepal | 📝 Planning | Home Visit | 2000 | 🔥 High | Savings, Credit Card Points | Yes |
| Yosemite Weekend | Yosemite National Park, CA | 📝 Planning | Nature | 300 | ⚡ Medium | Savings | Yes |
| Pacific Coast Road Trip | SF → Big Sur, CA | 💭 Dreaming | Road Trip | 500 | ⚡ Medium | Savings | Yes |
| Pacific Northwest Weekend | Seattle + Portland | 💭 Dreaming | Cultural | 550 | ⚡ Medium | Savings | Yes |
| PhD Campus Visits | Cornell / UC Davis | 💭 Dreaming | Academic | 1200 | 🔥 High | Savings | No |
| Thailand Work Exchange | Chiang Mai + Bangkok | 💭 Dreaming | Backpacking | 900 | ⚡ Medium | Savings, Hostel Work Exchange | Yes |

---

### DATABASE 12: ✈️ Travel Wishlist
**Location:** Inline database inside the "✈️ Travel" page (below Trips)

| Property Name | Type | Select Options |
|---|---|---|
| Place | Title | — |
| Why | Rich Text | — |
| Best Season | Rich Text | — |
| Estimated Cost | Number | — |
| Duration | Select | Weekend, 1 Week, 2 Weeks, 3+ Weeks |
| Visa Needed | Checkbox | — |
| Category | Multi-Select | Culture, Nature, Adventure, Food, Engineering, Academic, Photography, Spiritual |
| Inspiration | Rich Text | — |
| Promoted to Trip | Checkbox | — |

**Starter Data:**

| Place | Why | Best Season | Est. Cost | Visa | Category |
|---|---|---|---|---|---|
| Japan | Engineering marvels, trains, food culture, agriculture tech, robotics | Spring (cherry blossom) or Fall | 1500 | Yes | Culture, Engineering, Food |
| Netherlands | CEA research hub, cycling culture, canals, agriculture innovation | Apr–Oct | 1200 | Yes | Academic, Engineering, Culture |
| Iceland | Dramatic landscapes, Northern Lights, geology, photography paradise | Winter for lights, Summer for hiking | 1800 | Yes | Nature, Photography, Adventure |
| Bhutan | Close to Nepal, spiritual depth, sustainable tourism model | Oct–Nov | 1200 | Yes | Spiritual, Culture, Nature |
| Colombia | Affordable, warm, incredible biodiversity, food scene, backpacking culture | Dec–Mar | 800 | No | Adventure, Food, Nature |
| Turkey | Ancient history, stunning architecture, affordable, incredible food | Apr–Jun or Sep–Nov | 900 | No (e-Visa) | Culture, Food, Photography |
| New York City | Engineering landmarks, world-class museums, content opportunities, food | Anytime | 800 | No (domestic) | Culture, Engineering, Food |
| Peru | Machu Picchu, food capital of South America, hiking, ancient culture | May–Sep | 1000 | No | Adventure, Culture, Food |
| South Korea | Technology leader, food scene, K-culture, agricultural automation | Spring or Fall | 1200 | Yes | Culture, Engineering, Food |
| Israel | Precision agriculture world leader, historical significance, desert tech | Mar–May or Sep–Nov | 1500 | Yes | Academic, Engineering, Culture |

---

### DATABASE 13: 📓 Journal
**Location:** Inline database inside the "📓 Journal" page

| Property Name | Type | Select Options |
|---|---|---|
| Entry | Title | — |
| Date | Date | — |
| Type | Select | 📅 Daily, 📆 Weekly Review, 📆 Monthly Review, 📆 Quarterly Review, ⚖️ Decision Log |
| Mood | Select | 😄 Great, 🙂 Good, 😐 Okay, 😔 Low, 😩 Rough |
| Wins | Rich Text | — |
| Challenges | Rich Text | — |
| Insight | Rich Text | — |
| Next Week Focus | Rich Text | — |

**Starter Data:**

| Entry | Date | Type | Mood | Wins | Insight |
|---|---|---|---|---|---|
| Building my Life OS | 2026-03-23 | 📅 Daily | 😄 Great | Created the full Life OS design. All databases, properties, templates planned. Feeling clear and motivated. | The system only works if I use it. Consistency over perfection. Start messy, refine later. |

---

### DATABASE 14: 👥 People
**Location:** Inline database inside the "👥 People" page

| Property Name | Type | Select Options |
|---|---|---|
| Name | Title | — |
| Category | Select | Close Friend, Family, Professional, Mentor, Mentee |
| Birthday | Date | — |
| Important Dates | Rich Text | — |
| Last Contact | Date | — |
| Follow Up | Checkbox | — |
| Notes | Rich Text | — |

**Starter Data:**

| Name | Category | Birthday | Notes |
|---|---|---|---|
| Manisha Thapa | Close Friend | — | Public health professional in Nepal. Close personal connection. |
| Mom | Family | (April 15) | — |
| Dad | Family | — | — |
| Anil | Close Friend | — | Meet this weekend. |
| Eric | Professional | — | Co-founder from mentorship startup project. |
| Kathy | Professional | — | Co-founder from mentorship startup project. |

---

## PHASE 3: SET UP RELATIONS BETWEEN DATABASES

After ALL databases are created, add these relation properties:

1. **✅ Tasks** → Add "Goal" relation property → links to **🎯 Goals** database
2. **🎯 Goals** → The reverse relation "Tasks" should auto-appear linking back to **✅ Tasks**
3. **🎥 Content Engine** → Add "Product Link" relation property → links to **💰 Digital Products** database
4. **💰 Digital Products** → The reverse relation "Content" should auto-appear linking back to **🎥 Content Engine**
5. **✈️ Trips** → Add "Content" relation property → links to **🎥 Content Engine** database

---

## PHASE 4: CREATE VIEWS

For each database, create these specific views:

### 📥 Inbox Views:
1. **"Unprocessed"** — List view, filter: Processed = unchecked, sort: Captured descending (DEFAULT)
2. **"All Items"** — List view, no filter, sort: Captured descending

### ✅ Tasks Views:
1. **"Today's Focus"** — Table view, filter: Due Date = Today OR (Priority = P1 AND Status ≠ Done AND Status ≠ Archived), sort: Priority ascending (DEFAULT)
2. **"This Week"** — Board view, filter: Due Date within this week AND Status ≠ Done AND Status ≠ Archived, group by: Domain
3. **"Backlog"** — Table view, filter: Status = Not Started, sort: Priority ascending
4. **"Done"** — Table view, filter: Status = Done, sort: Date descending

### 🎯 Goals Views:
1. **"Active Goals"** — Gallery view, filter: Status = Active (DEFAULT)
2. **"All Goals"** — Table view, no filter, group by: Timeframe

### 💪 Training Log Views:
1. **"Recent Sessions"** — Table view, sort: Date descending (DEFAULT)
2. **"By Type"** — Table view, group by: Type

### 💪 Skill Tracker Views:
1. **"All Skills"** — Table view, sort: Progress descending (DEFAULT)

### 🎥 Content Engine Views:
1. **"Pipeline"** — Board view, filter: Status ≠ Archived, group by: Status (DEFAULT)
2. **"Idea Bank"** — Gallery view, filter: Status = Idea
3. **"By Theme"** — Table view, group by: Theme

### 🎓 Programs & Faculty Views:
1. **"All Programs"** — Table view, sort: Fit ascending (Strong first) (DEFAULT)

### 🎓 Paper Reading List Views:
1. **"To Read"** — Table view, filter: Status = To Read OR Status = Reading (DEFAULT)
2. **"All Papers"** — Table view, group by: Status

### 🤖 AI Lab Views:
1. **"Active"** — Table view, filter: Status ≠ Archived, sort: Status ascending (DEFAULT)
2. **"By Category"** — Board view, group by: Category

### 💰 Digital Products Views:
1. **"Pipeline"** — Board view, filter: Status ≠ Retired, group by: Status, sort: Priority Score descending (DEFAULT)
2. **"By Score"** — Table view, sort: Priority Score descending

### ✈️ Trips Views:
1. **"Active & Upcoming"** — Board view, filter: Status ≠ Completed AND Status ≠ Cancelled, group by: Status (DEFAULT)
2. **"All Trips"** — Table view, sort by Date

### ✈️ Travel Wishlist Views:
1. **"Wishlist"** — Gallery view, show: Place, Why, Estimated Cost, Category (DEFAULT)

### 📓 Journal Views:
1. **"Recent"** — Table view, sort: Date descending (DEFAULT)
2. **"Weekly Reviews"** — Table view, filter: Type = Weekly Review

### 👥 People Views:
1. **"All People"** — Table view, sort: Name ascending (DEFAULT)
2. **"Follow Up Needed"** — Table view, filter: Follow Up = checked

---

## PHASE 5: BUILD THE COMMAND CENTER

The **⌘ Command Center** page is the main dashboard. Build it as follows:

### Page Structure (top to bottom):

1. **Header callout block** (blue/teal background):
   - Title: "⌘ COMMAND CENTER"
   - Subtitle text: "Engineer · Creator · PhD Aspirant"
   - Below: "Today's North Star:" followed by an editable text area

2. **Linked Database View: "Today's Tasks"**
   - Source: ✅ Tasks database
   - View type: Table
   - Filter: Due Date = Today OR (Priority = P1 AND Status ≠ Done)
   - Properties shown: Task, Status, Priority, Domain, Effort
   - Sort: Priority ascending

3. **Divider**

4. **Linked Database View: "This Week"**
   - Source: ✅ Tasks database
   - View type: Board grouped by Domain
   - Filter: Due Date within this week AND Status ≠ Done

5. **Divider**

6. **Linked Database View: "Active Goals"**
   - Source: 🎯 Goals database
   - View type: Gallery
   - Filter: Status = Active
   - Properties shown: Goal, Domain, Progress, Key Results

7. **Divider**

8. **Linked Database View: "Content Pipeline"**
   - Source: 🎥 Content Engine
   - View type: Board grouped by Status
   - Filter: Status ≠ Archived AND Status ≠ Published

9. **Divider**

10. **Linked Database View: "Unprocessed Inbox"**
    - Source: 📥 Inbox
    - View type: List
    - Filter: Processed = unchecked

11. **Quick Links section** (callout block, gray background):
    - Links to: Google Calendar, Personal Finance OS (Excel), GitHub, shrestharupesh.com, LinkedIn

---

## PHASE 6: CREATE TEMPLATE PAGES

### Inside the "📋 Templates" page, create:

#### Template 1: "📆 Weekly Review Template"
Create a page with this content structure:

```
📆 WEEKLY REVIEW — Week of [DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1: PROCESS INBOX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
☐ Open Inbox. For each item: move to correct database or delete.
☐ All items processed?

STEP 2: REVIEW LAST WEEK
☐ What did I accomplish?
  Wins: ___
☐ What didn't happen? Why?
  Missed: ___

STEP 3: CHECK GOALS
☐ Open Goals. Update progress numbers.
☐ Am I on track for the quarter? (yes / no / adjusting)

STEP 4: PLAN NEXT WEEK
☐ Set 1–3 P1 tasks for each day (Mon–Fri)
☐ Schedule gym sessions in Google Calendar (Mon/Wed/Fri)
☐ Pick 1–2 content pieces to work on
☐ Identify 1 AI learning topic for the week

STEP 5: LIFE ADMIN CHECK
☐ Any bills due this week?
☐ Any deadlines approaching?
☐ Anyone I should follow up with?
☐ Travel Fund: on track? ($200/month target)

STEP 6: REFLECTION
One key insight from this week: ___
One thing I want to do differently: ___
Energy level right now (1–10): ___
```

#### Template 2: "📆 Monthly Review Template"
Create a page with this content:

```
📆 MONTHLY REVIEW — [MONTH YEAR]

PART A: RUN WEEKLY REVIEW FIRST

PART B: MONTHLY DEEP DIVE
☐ Review all monthly goals. Status update on each.
☐ Content performance: Which posts performed best? Why?
☐ Finance: Open Excel Finance OS. Check:
    - Spending vs budget
    - Savings progress
    - Travel Fund balance
    - Any subscriptions to cancel?
☐ PhD: Any new programs or faculty discovered? Papers read?
☐ Products: Any ideas validated? Anything ready to build?
☐ Travel: Any upcoming trips to plan? Wishlist updated?

PART C: NEXT MONTH PRIORITIES
Top 3 priorities for next month:
1. ___
2. ___
3. ___

Domains on ACTIVE focus: ___
Domains on MAINTENANCE: ___
```

---

## PHASE 7: ADD SUPPLEMENTARY CONTENT TO KEY PAGES

### On the "✈️ Travel" page, ABOVE the Trips database, add a callout block:

Title: "✈️ Travel Fund"
Content:
```
🎯 Goal: $3,000 by end of 2026
💰 Current: $0
📅 Monthly target: $200/month
📊 Progress: 0%

Update this during monthly financial review.
```

### On the "💪 Fitness" page, ABOVE the Training Log, add a callout block:

Title: "💪 Weekly Plan"
Content:
```
🏋️ Gym: Mon / Wed / Fri (evenings, 60-75 min)
🏃 Run: Saturday morning (30-45 min)
🤸 Calisthenics Park: Saturday afternoon (optional)
🍳 Meal Prep: Saturday or Sunday
```

### On the "🎓 PhD & Research" page, ABOVE the Programs database, add a callout block:

Title: "🎓 Research Project"
Content:
```
📌 Active Project: LED Lighting Thermal Efficiency in Vertical Farming
🎯 Target Output: arXiv preprint + submission to MDPI Energies or Biosystems Engineering
📊 Status: Planning
📅 Timeline: 6-month independent research project

Milestones:
1. Literature review (15+ papers)
2. Thermal model setup
3. Simulation runs
4. Draft paper
5. Submit
```

---

## VERIFICATION CHECKLIST

After building everything, verify:

☐ All 13 top-level pages exist in the sidebar
☐ All 14 databases are created with correct properties
☐ All starter data is populated
☐ Relations between Tasks↔Goals, Content↔Products, and Trips↔Content are working
☐ The Priority Score formula on Digital Products is calculating correctly
☐ The Command Center has all linked database views with correct filters
☐ Weekly Review and Monthly Review templates exist in Templates page
☐ Callout blocks on Travel, Fitness, and PhD pages are in place
☐ All views are created and named correctly

---

## NOTES FOR CLAUDE CODE

- If the Notion MCP tools don't support creating views directly, create the databases with properties and data first, and note which views I need to create manually.
- If formula properties aren't supported via API, note it and I'll add the Priority Score formula manually.
- For date fields with relative values like "(today)" or "(end of week)", use the actual current date or appropriate future date.
- If creating linked database views on the Command Center isn't possible via API, create the page with text placeholders describing each view, and I'll add the linked views manually.
- Prioritize getting all databases and data created correctly. Views and the Command Center layout are secondary and can be manual if needed.
- Work through the phases in order. Don't skip ahead.
