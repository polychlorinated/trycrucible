import type { FaqItem } from "./faq";

export interface ComparisonRow {
  dimension: string;
  crucible: string;
  rival: string;
}

export interface Differentiator {
  title: string;
  body: string;
}

export interface Comparison {
  slug: string;
  rivalName: string;
  hubSlug: string;
  title: string;
  description: string;
  pitch: string;
  rows: ComparisonRow[];
  differentiators: Differentiator[];
  faqs: FaqItem[];
}

export interface HubSpoke {
  name: string;
  href: string;
  pitch: string;
}

export interface ComparisonHub {
  slug: string;
  name: string;
  title: string;
  description: string;
  hook: string;
  audience: string;
  spokes: HubSpoke[];
}

export const comparisonHubs: ComparisonHub[] = [
  {
    slug: "social-video-apps",
    name: "Social Video Repurposing Apps",
    title: "Crucible vs. social video repurposing apps | Crucible",
    description:
      "Comparing Crucible against tools that turn existing long-form video into clips and scheduled social posts.",
    hook:
      "Most social video tools focus purely on auto-scheduling, adding automated captions, and auto-clipping arbitrary loud moments. Crucible starts before the video exists — an AI interviewer extracts key insights from your raw thoughts, turning one unscripted session into short-form clips, carousel slides, long-form deep dives, and written posts.",
    audience:
      "Built for creators, founders, and solopreneurs breaking long-form webinars, podcasts, and talks into social media assets.",
    spokes: [
      { name: "OpusClip", href: "/vs/opusclip/", pitch: "Long video → viral clips, auto-clipped by engagement scores." },
      { name: "Taja AI", href: "/vs/taja-ai/", pitch: "Repurpose and auto-schedule long-form video across platforms." },
      { name: "Descript", href: "/vs/descript/", pitch: "Word-based timeline editing for podcasts and video." },
      { name: "Submagic", href: "/vs/submagic/", pitch: "Flashy captions and B-roll styling for shorts." },
      { name: "Captions", href: "/vs/captions/", pitch: "AI camera and auto-editor for talking-head videos." },
      { name: "VEED", href: "/vs/veed/", pitch: "General-purpose browser video editor with AI tools." },
      { name: "Pressmaster", href: "/vs/pressmaster/", pitch: "AI brand voice scaling for growth teams." },
      { name: "DraftAI", href: "/vs/draft-ai/", pitch: "Voice notes into social text posts and scripts." },
    ],
  },
  {
    slug: "ai-video-generators",
    name: "AI Video & Faceless Generators",
    title: "Crucible vs. AI video & faceless generators | Crucible",
    description:
      "Comparing Crucible against text-to-video tools, automated scriptwriters, and synthetic voiceover generators.",
    hook:
      "Text-to-video generators produce generic, faceless AI noise using stock media and synthetic avatars. Crucible captures genuine personal authority by converting your lived experience and voice into authentic multi-channel campaigns.",
    audience:
      "Built for marketers and channel operators evaluating text-to-video tools, automated scriptwriters, and synthetic voiceover generators.",
    spokes: [
      { name: "Vidgenie.ai", href: "/vs/vidgenie/", pitch: "AI-generated videos from scripts, visuals, and voiceovers." },
      { name: "StoryShort", href: "/vs/storyshort/", pitch: "Faceless short videos on autopilot from text prompts." },
    ],
  },
  {
    slug: "linkedin-growth-tools",
    name: "LinkedIn Growth & Writing Tools",
    title: "Crucible vs. LinkedIn growth & writing tools | Crucible",
    description:
      "Comparing Crucible against LinkedIn post editors, schedulers, and personal-branding writing tools.",
    hook:
      "Most LinkedIn tools help you write faster — but you still face the blank page. Crucible skips the editor entirely: an AI interviewer captures your spoken insights and turns one recording into written posts, video clips, carousel slides, and deep dives in your own voice.",
    audience:
      "Built for founders, consultants, and creators who want LinkedIn authority plus video, carousels, and written content across channels.",
    spokes: [
      { name: "Oiti AI", href: "/vs/oiti-ai/", pitch: "Full-stack AI LinkedIn personal branding agent." },
      { name: "Supergrow", href: "/vs/supergrow/", pitch: "LinkedIn post editor, engagement, and analytics." },
    ],
  },
  {
    slug: "ghostwriters",
    name: "Agency & Ghostwriter Alternatives",
    title: "Crucible vs. ghostwriters & agencies | Crucible",
    description:
      "Comparing Crucible against ghostwriting agencies and high-touch personal branding services.",
    hook:
      "Agencies charge thousands a month and take days to turn drafts. Crucible interviews you like an agency would — then delivers the week's clips, carousels, posts, and deep dives instantly, for a fraction of the cost.",
    audience:
      "Built for founders and executives weighing an agency retainer against an automated content engine.",
    spokes: [
      { name: "Ghostwriters", href: "/vs/ghostwriters/", pitch: "Human writers at $2,000–$5,000/month." },
      { name: "Avium", href: "/vs/avium/", pitch: "Personal branding agency for world-class experts." },
    ],
  },
];

export const comparisons: Comparison[] = [
  {
    slug: "taja-ai",
    rivalName: "Taja AI",
    hubSlug: "social-video-apps",
    title: "Crucible vs Taja AI — Create content before repurposing | Crucible",
    description:
      "Taja AI repurposes and auto-schedules existing long-form video. Crucible interviews you first, then generates clips, carousel slides, written posts, and deep dives.",
    pitch:
      "Taja AI optimizes, repurposes, and auto-schedules existing long-form video content for social channels. Crucible acts as an end-to-end content engine that interviews you first, then generates clips, carousel slides, written social posts, and long-form deep dives.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → a week of video, carousels & written content", rival: "Long-form video → repurposed clips & auto-scheduled posts" },
      { dimension: "AI interviewer", crucible: "Yes — extracts original angles from unscripted thoughts", rival: "No — requires completed long-form video files" },
      { dimension: "Target audience", crucible: "Founders, consultants, and executive subject matter experts", rival: "Solopreneurs, realtors, and congregations" },
      { dimension: "Written content", crucible: "Native LinkedIn posts, newsletters, and blog drafts", rival: "Social post captions & video metadata" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "$19.99–$99.99/mo; annual $15.99–$79.99" },
    ],
    differentiators: [
      { title: "Creation before repurposing", body: "Taja AI assumes a finished long-form video is ready to upload. Crucible's AI interviewer prompts unscripted ideas out of your head, so no pre-existing video is required." },
      { title: "Narrative over auto-scheduling", body: "Taja AI focuses on auto-scheduling and thumbnail generation. Crucible prioritizes narrative extraction to preserve context across formats." },
      { title: "Complete written campaigns", body: "Taja AI outputs social video captions. Crucible produces fully formatted LinkedIn posts, newsletters, and deep-dive article drafts from the same recording." },
    ],
    faqs: [
      { q: "Is Taja AI a Crucible competitor?", a: "They solve different halves of the problem. Taja repurposes finished long-form videos into clips and schedules them. Crucible starts earlier — an AI interviewer draws the raw material out of you. If you already have polished long-form video, the tools overlap; if you're starting from raw thoughts, Crucible comes first." },
      { q: "Does Crucible auto-schedule to social platforms?", a: "You can publish posts straight to LinkedIn from Crucible. Multi-platform auto-scheduling the way Taja does it isn't Crucible's focus — Crucible's focus is creating authentic assets in your voice." },
      { q: "Do I need an existing video library to use Crucible?", a: "No. Record a brain dump or an AI-guided interview whenever inspiration strikes — no finished footage required." },
    ],
  },
  {
    slug: "pressmaster",
    rivalName: "Pressmaster",
    hubSlug: "social-video-apps",
    title: "Crucible vs Pressmaster — Guided interviews vs brand voice workflows | Crucible",
    description:
      "Pressmaster scales content creation with AI brand voice tools for teams. Crucible turns raw audio interviews into structured multi-format output.",
    pitch:
      "Pressmaster scales content creation with AI brand voice tools for marketing teams. Crucible provides a streamlined conversational engine that turns raw audio interviews into structured multi-format output.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → video clips + carousels + deep dives + written posts", rival: "AI brand voice scaling & team content deployment" },
      { dimension: "Input method", crucible: "Conversational AI video/audio interview", rival: "Text prompts, documents, and media uploads" },
      { dimension: "Editing engine", crucible: "Narrative-aware Preserve & Remix modes", rival: "AI brand voice assistant & multi-channel distributor" },
      { dimension: "Target audience", crucible: "Founders, experts, and lean marketing teams", rival: "Growth teams and marketing agencies" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "Starter $29/mo · Pro $59/mo · Leader $96/mo · Agency $199/mo" },
    ],
    differentiators: [
      { title: "Guided insight extraction", body: "Pressmaster helps communicate existing ideas through AI workflows. Crucible actively interviews you to draw out implicit expertise you didn't know you could articulate." },
      { title: "Integrated video pipeline", body: "Pressmaster focuses on multi-channel messaging and brand voice consistency. Crucible natively processes video clips alongside long-form written assets." },
      { title: "Simplified campaign credits", body: "Crucible charges per complete content campaign, without managing complex agency seats or tiered feature access." },
    ],
    faqs: [
      { q: "Is Pressmaster only for teams?", a: "Pressmaster targets growth teams and agencies with seat-based tiers. Crucible serves both lean teams and individual founders with simple campaign-based plans." },
      { q: "Can Crucible match my brand voice like an AI brand voice tool?", a: "Yes. You approve the brand voice profile up front and can upload style guides and context documents — every draft follows it, and you can edit anything." },
      { q: "Does Crucible distribute content to every channel?", a: "Crucible produces the assets — clips, carousels, deep dives, and written posts — and publishes directly to LinkedIn. For other channels, download the files and post them wherever you like." },
    ],
  },
  {
    slug: "draft-ai",
    rivalName: "DraftAI",
    hubSlug: "social-video-apps",
    title: "Crucible vs DraftAI — Finished campaigns vs text drafts | Crucible",
    description:
      "DraftAI turns voice notes into social text posts and scripts. Crucible turns raw audio into complete multi-media campaigns with publish-ready video.",
    pitch:
      "DraftAI transforms brief voice notes into short social media text posts and video scripts. Crucible processes raw audio into complete multi-media campaigns containing video clips, carousel slides, deep-dive articles, and structured social posts.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → clips + carousels + deep dives + written posts", rival: "Voice notes → social text posts & script drafts" },
      { dimension: "Video processing", crucible: "Direct narrative clipping & video rendering", rival: "Script generation only (no video editing)" },
      { dimension: "Interviewer", crucible: "Interactive AI interviewer with gap research", rival: "Passive audio recording transcript processing" },
      { dimension: "Target audience", crucible: "Executive subject matter experts & B2B leaders", rival: "Consumer users & B2C creators" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "$14.99/month or $99.99/year" },
    ],
    differentiators: [
      { title: "Interactive prompts", body: "DraftAI passively transcribes voice recordings. Crucible actively asks follow-up questions to pull out key details and counter-intuitive insights." },
      { title: "End-to-end media output", body: "DraftAI provides text drafts and video scripts that still require separate video editing software. Crucible delivers publish-ready video clips directly." },
      { title: "B2B market research", body: "Crucible includes market gap analysis on Pro to align your content with active industry conversations." },
    ],
    faqs: [
      { q: "Is DraftAI cheaper than Crucible?", a: "DraftAI is $14.99/month for text posts and scripts from voice notes. Crucible starts at $49/month but delivers publish-ready video clips, carousel slides, and deep dives — not just text drafts." },
      { q: "Can I record with my phone?", a: "Yes. Record in-app or upload video or audio from your device — Crucible processes either." },
      { q: "Does Crucible write scripts?", a: "Crucible produces finished videos, carousel slides, and written posts. Scripting is an intermediate step the system handles for you, so you never face a blank script document." },
    ],
  },
  {
    slug: "vidgenie",
    rivalName: "Vidgenie.ai",
    hubSlug: "ai-video-generators",
    title: "Crucible vs Vidgenie.ai — Your real voice vs synthetic video | Crucible",
    description:
      "Vidgenie.ai creates synthetic videos with AI scripts, stock visuals, and voiceovers. Crucible builds content campaigns from your authentic voice and expertise.",
    pitch:
      "Vidgenie.ai creates synthetic videos using AI-generated scripts, stock visuals, and voiceovers. Crucible uses your authentic voice and expertise to build content campaigns.",
    rows: [
      { dimension: "Core job", crucible: "Personal expertise → multi-format authority campaign", rival: "Text prompt → synthetic AI video with voiceovers" },
      { dimension: "Authenticity model", crucible: "Original video/audio recording of the subject expert", rival: "AI-generated voiceovers, scripts, and stock media" },
      { dimension: "Written outputs", crucible: "Carousels, LinkedIn posts, newsletters, and long-form articles", rival: "Video scripts only" },
      { dimension: "Audience", crucible: "Subject matter experts, consultants, and executives", rival: "General businesses and social creators" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "Monthly $0–$99 · Annual $0–$990" },
    ],
    differentiators: [
      { title: "Human authority", body: "Vidgenie.ai generates synthetic visuals and computer voiceovers. Crucible highlights real human perspectives and individual domain knowledge." },
      { title: "Zero stock footage fatigue", body: "Crucible edits genuine video recordings into narrative clips, rather than combining generic stock footage clips." },
      { title: "Multi-channel strategy", body: "Vidgenie.ai renders standalone video files for YouTube and TikTok. Crucible converts every session into both visual media and written publication formats." },
    ],
    faqs: [
      { q: "Does Crucible create AI avatars or synthetic voiceovers?", a: "No. Crucible deliberately keeps your real face and voice front and center — that authenticity is the whole point, and it's not replicable by AI alone." },
      { q: "What if I don't want to be on camera?", a: "Record a raw audio brain dump or an audio-only interview. Crucible works from your spoken words and can produce written posts, carousel slides, and deep dives without video." },
      { q: "How fast is content generated?", a: "A few minutes after recording, typically. Your edited video, carousel slides, clips, and written posts come back ready to review." },
    ],
  },
  {
    slug: "storyshort",
    rivalName: "StoryShort",
    hubSlug: "ai-video-generators",
    title: "Crucible vs StoryShort — Personal authority vs faceless autopilot | Crucible",
    description:
      "StoryShort generates faceless short videos from text prompts. Crucible extracts authentic insights from domain experts into multi-format thought leadership assets.",
    pitch:
      "StoryShort generates faceless short videos on autopilot using text prompts and automated templates. Crucible extracts authentic insights from domain experts to create multi-format thought leadership assets.",
    rows: [
      { dimension: "Core job", crucible: "Expert brain dump → branded content engine", rival: "Text prompt → faceless automated short video" },
      { dimension: "Video style", crucible: "Authentic founder/expert talking head & clips", rival: "Faceless stock video with text overlays" },
      { dimension: "Primary platforms", crucible: "LinkedIn, newsletters, YouTube, X, and blogs", rival: "TikTok and YouTube Shorts" },
      { dimension: "Target market", crucible: "Founders, consultants, and B2B professionals", rival: "Faceless content creators and affiliate channels" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "Monthly $39–$199 · Annual $399–$1,999" },
    ],
    differentiators: [
      { title: "Personal branding", body: "StoryShort automates generic faceless videos. Crucible builds personal brand equity around real domain expertise." },
      { title: "Strategic depth", body: "StoryShort relies on prompt engineering to synthesize videos. Crucible uses structured research and an interactive interviewer to pull unique insights directly from the source." },
      { title: "Channel coverage", body: "StoryShort is limited to short vertical video platforms. Crucible delivers video clips and carousel slides alongside written essays, newsletters, and text posts." },
    ],
    faqs: [
      { q: "Is faceless content bad?", a: "It works for some channels, but it can't build personal authority. Crucible builds brand equity around a real person — your face, your voice, your point of view." },
      { q: "Can Crucible make TikTok videos?", a: "Yes — 60-second hook-first clips formatted for TikTok, YouTube Shorts, and LinkedIn come out of every campaign." },
      { q: "Do I need to be good at prompts?", a: "No prompt engineering required. You talk; the interviewer guides the conversation; the system produces the week of content." },
    ],
  },
  {
    slug: "oiti-ai",
    rivalName: "Oiti AI",
    hubSlug: "linkedin-growth-tools",
    title: "Crucible vs Oiti AI — Spoken voice vs written prompts | Crucible",
    description:
      "Oiti AI generates written LinkedIn posts optimized for dwell time. Crucible captures spoken audio to produce video clips, carousel slides, and written content across channels.",
    pitch:
      "Oiti AI is an AI personal branding tool designed to generate written LinkedIn posts tailored to maximize dwell time. Crucible captures rich spoken audio to generate both written LinkedIn content, carousel slides, and ready-to-publish video clips.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → video clips + carousels + written posts", rival: "Written LinkedIn post generation & dwell time optimization" },
      { dimension: "Media support", crucible: "Video clips, carousels, audio processing, and written posts", rival: "Written posts and infographics" },
      { dimension: "Input source", crucible: "Interactive video/audio AI interview", rival: "Topic inputs, research trends, and text prompts" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "Creator: $49/mo ($245/yr) · Pro: $79/mo ($395/yr)" },
    ],
    differentiators: [
      { title: "Audio/video native", body: "Oiti AI focuses on text generation and infographic tools. Crucible captures native video, yielding clips and carousels alongside text posts." },
      { title: "Organic voice capture", body: "Oiti AI relies on algorithmic text generation. Crucible captures natural speech phrasing through an interview format to avoid synthetic text patterns." },
      { title: "Multi-platform reach", body: "Crucible generates assets for newsletters, blogs, and video channels — expanding reach beyond LinkedIn-only distribution." },
    ],
    faqs: [
      { q: "Is Crucible a LinkedIn writing tool?", a: "LinkedIn writing is one output. Crucible also produces video clips, carousels, deep dives, and newsletters from the same recording — LinkedIn is a destination, not the whole system." },
      { q: "Does Crucible optimize for the LinkedIn algorithm?", a: "Crucible optimizes for authentic voice and narrative. Pro includes social research — competitor and topic tracking — to show where you can weigh in." },
      { q: "Can I write posts manually in Crucible?", a: "Yes. Every draft is editable before it goes anywhere, and you can publish straight from the dashboard." },
    ],
  },
  {
    slug: "supergrow",
    rivalName: "Supergrow",
    hubSlug: "linkedin-growth-tools",
    title: "Crucible vs Supergrow — Talk it out vs write it out | Crucible",
    description:
      "Supergrow is a written LinkedIn post editor and scheduler. Crucible is an end-to-end media engine that captures spoken expertise and generates video and text.",
    pitch:
      "Supergrow is a written LinkedIn post editor, scheduling tool, and analytics dashboard. Crucible serves as an end-to-end media engine that captures spoken expertise and generates video and text content across channels.",
    rows: [
      { dimension: "Core job", crucible: "Spoken insight → full multi-channel content campaign", rival: "Written LinkedIn post drafting, engagement & scheduling" },
      { dimension: "Video production", crucible: "Automated narrative clip extraction & edits", rival: "No video editing features" },
      { dimension: "Content generation", crucible: "Interactive AI interview to extract unscripted ideas", rival: "Written text editor, AI text prompts & scheduling" },
      { dimension: "Analytics", crucible: "Engagement analytics & brand growth monitoring included", rival: "LinkedIn post analytics & engagement workflows" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "Starter $19/mo ($16 annual) · Pro $39/mo ($31 annual) · Team $139/mo" },
    ],
    differentiators: [
      { title: "Zero writing required", body: "Supergrow requires manual text drafting and prompt editing. Crucible lets you talk through your ideas in a guided conversation." },
      { title: "Cross-format production", body: "Supergrow focuses strictly on text posts and LinkedIn formatting. Crucible creates short clips, carousels, long-form videos, newsletters, and articles simultaneously." },
      { title: "Market gap integration", body: "Crucible cross-references your spoken ideas against active search and social trends to maximize positioning across all channels." },
    ],
    faqs: [
      { q: "Does Supergrow do what Crucible does?", a: "Supergrow is a text editor and scheduler for LinkedIn. Crucible generates video, carousel slides, and written content from your spoken insights — it's an upstream creation engine, not an editor." },
      { q: "I write my own posts — why would I use Crucible?", a: "For the video side and the interview. Talk for ten minutes and get clips, carousel slides, deep dives, and written drafts — then hand them to your favorite editor if you want." },
      { q: "Does Crucible have engagement analytics?", a: "Yes. Crucible includes engagement analytics for your published campaigns — views, engagement, and reach — alongside brand growth monitoring. What it doesn't do is Supergrow's day-to-day LinkedIn engagement workflows like commenting and DM replies; that's not the focus." },
    ],
  },
  {
    slug: "avium",
    rivalName: "Avium",
    hubSlug: "ghostwriters",
    title: "Crucible vs Avium — Automated engine vs $1,200/month agency | Crucible",
    description:
      "Avium is a high-touch personal branding agency for experts. Crucible delivers the interviewing, editing, and content production of a ghostwriting agency in software.",
    pitch:
      "Avium operates as a high-touch personal branding agency infrastructure for keynote speakers, book authors, and founders. Crucible delivers the interviewing, editing, and content production capabilities of a high-end ghostwriting agency in an automated platform.",
    rows: [
      { dimension: "Core job", crucible: "Software engine turning brain dumps into content campaigns", rival: "High-touch personal branding agency & visibility service" },
      { dimension: "Production speed", crucible: "Minutes post-interview", rival: "Multi-week human review & revision cycles" },
      { dimension: "Deliverables", crucible: "Video clips, carousels, deep dives, newsletters, social posts", rival: "Customized online authority infrastructure & media placement" },
      { dimension: "Target customer", crucible: "Founders, experts, and consultants", rival: "Keynote speakers, authors, and high-profile executives" },
      { dimension: "Pricing", crucible: "$49/mo Starter · $149/mo Pro", rival: "Estimated $1,200+/month agency retainer" },
    ],
    differentiators: [
      { title: "Asynchronous availability", body: "Avium relies on manual account management and scheduled syncs. Crucible lets you record interviews whenever insights hit — 24/7, no calendar coordination." },
      { title: "Cost efficiency", body: "Avium charges agency retainer fees starting around $1,200/month. Crucible provides automated interview processing and multi-format content generation starting at $49/month." },
      { title: "Full asset control", body: "Crucible gives creators direct control over brand parameters, source recordings, and output formats — without agency back-and-forth." },
    ],
    faqs: [
      { q: "Is Avium an agency or a tool?", a: "An agency — high-touch personal branding services for speakers, authors, and founders, with retainers estimated around $1,200+/month. Crucible automates that same pipeline in software." },
      { q: "Do I lose quality without an agency?", a: "Crucible keeps you in control: your voice profile, your exact words, and everything editable before it ships. The AI interviewer replaces the agency interview — the polish is yours to approve." },
      { q: "Who is Avium for vs Crucible?", a: "Avium suits high-profile executives who want a dedicated team and media placement. Crucible suits founders and experts who want the same outputs on their own schedule, at a fraction of the cost." },
    ],
  },
  {
    slug: "descript",
    rivalName: "Descript",
    hubSlug: "social-video-apps",
    title: "Crucible vs Descript — Create the recording, don't just edit it | Crucible",
    description:
      "Descript edits video by changing the transcript. Crucible generates content from scratch by interviewing you and turning the recording into multiple formats.",
    pitch:
      "Descript edits video by changing the text transcript. Crucible generates the content from scratch by interviewing you and turning the recording into multiple formats.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → a week of content", rival: "Word-based timeline editing for podcasts/video" },
      { dimension: "AI interviewer", crucible: "Yes", rival: "No — you upload a finished file" },
      { dimension: "Editing model", crucible: "Narrative-aware Preserve & Remix modes", rival: "Manual transcript editing & text-based cuts" },
      { dimension: "Outputs", crucible: "Clips + carousels + deep dives + written posts", rival: "Polished video/audio & transcripts" },
      { dimension: "Pricing", crucible: "$49 Starter · $149 Pro", rival: "Free · Hobbyist $16–24/mo · Creator $24–35/mo · Business $50–65/mo" },
    ],
    differentiators: [
      { title: "Ideation vs assembly", body: "Descript requires a finished recording to edit. Crucible's AI interviewer draws the ideas out of your head to create the raw material." },
      { title: "Multi-format campaigns", body: "Descript outputs media files. Crucible turns one recording into a full week of written LinkedIn posts, newsletters, carousels, and video clips." },
      { title: "Predictable billing", body: "Descript relies on a complex dual-currency system (Media Hours + AI Credits) that makes monthly costs unpredictable. Crucible operates on a simple per-campaign basis." },
    ],
    faqs: [
      { q: "Is Descript an editor or a content system?", a: "An editor — you bring finished media and edit it via the transcript. Crucible creates the media first, then offers the same interaction: click any word in the transcript to cut it and the video re-renders." },
      { q: "Can I bring my Descript workflows to Crucible?", a: "If you already record podcasts or videos, upload them to Crucible and it will process them into clips, carousels, and written posts with your brand voice profile." },
      { q: "How does billing compare?", a: "Descript bills media hours plus AI credits. Crucible bills per campaign: 4/month on Starter, 16/month on Pro, with single credits at $19." },
    ],
  },
  {
    slug: "submagic",
    rivalName: "Submagic",
    hubSlug: "social-video-apps",
    title: "Crucible vs Submagic — Narrative substance vs caption flash | Crucible",
    description:
      "Submagic styles short-form videos with flashy captions and B-roll. Crucible builds the narrative from your raw thoughts and outputs video, carousels, and written content.",
    pitch:
      "Submagic styles short-form videos with flashy captions and B-roll. Crucible builds the narrative from your raw thoughts and outputs video, carousels, and written content.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → a week of content", rival: "Adding viral captions/B-roll to shorts" },
      { dimension: "AI interviewer", crucible: "Yes", rival: "No" },
      { dimension: "Editing model", crucible: "Narrative-aware cuts", rival: "Auto-styling, emoji insertion & B-roll overlays" },
      { dimension: "Outputs", crucible: "Clips + carousels + deep dives + written posts", rival: "Vertical short-form clips only" },
      { dimension: "Pricing", crucible: "$49 Starter · $149 Pro", rival: "Starter $12–19/mo · Pro $23–39/mo · AI clipping add-on $12–19/mo" },
    ],
    differentiators: [
      { title: "Substance over flash", body: "Submagic focuses heavily on jumping text and emojis. Crucible focuses on identifying high-impact narrative hooks from your brain dumps." },
      { title: "Start from zero", body: "Submagic requires you to shoot a video first. Crucible's pipeline starts with you and an AI interviewer." },
      { title: "Beyond the clip", body: "Submagic only handles video. Crucible takes the same raw session and turns it into written blog drafts and social posts." },
    ],
    faqs: [
      { q: "Does Crucible add animated captions?", a: "Crucible's focus is narrative structure — hooks, pacing, and story — through Preserve and Remix modes. Caption styling like Submagic's is a different job." },
      { q: "Can I use Submagic on Crucible clips?", a: "Absolutely. Export Crucible's final clips and run them through Submagic if you want extra styling. The tools compose rather than compete." },
      { q: "Which is better for engagement?", a: "They do different jobs: Submagic styles an existing clip; Crucible creates the week of content the clip comes from." },
    ],
  },
  {
    slug: "captions",
    rivalName: "Captions",
    hubSlug: "social-video-apps",
    title: "Crucible vs Captions — Authentic interviews vs AI avatars | Crucible",
    description:
      "Captions is an AI camera and auto-editor for talking-head videos. Crucible is an engine that turns your unscripted expertise into a multi-channel campaign.",
    pitch:
      "Captions is an AI mobile/desktop camera and auto-editor for talking-head videos. Crucible is an engine that turns your unscripted expertise into a multi-channel campaign.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → a week of content", rival: "Recording, AI-correcting & editing talking-head videos" },
      { dimension: "AI interviewer", crucible: "Yes", rival: "No — uses teleprompters and AI avatars" },
      { dimension: "Editing model", crucible: "Narrative-aware Preserve & Remix modes", rival: "AI eye-contact correction and jump cuts" },
      { dimension: "Outputs", crucible: "Clips + carousels + deep dives + written posts", rival: "Highly polished talking-head clips" },
      { dimension: "Pricing", crucible: "$49 Starter · $149 Pro", rival: "Basic $9.99/mo · Max $24.99/mo + ~$0.05/credit consumption" },
    ],
    differentiators: [
      { title: "Authentic ideas vs avatars", body: "Captions leans heavily on AI avatars, teleprompters, and fake eye-contact generation. Crucible captures your authentic expertise through a conversational interview." },
      { title: "Transparent pricing", body: "Captions stacks subscription fees with per-credit consumption costs. Crucible uses straightforward campaign-based plans." },
      { title: "One pass, every format", body: "Captions ends at video render. Crucible gives you the accompanying carousels, deep dives, and written social posts automatically." },
    ],
    faqs: [
      { q: "Does Crucible use AI avatars?", a: "No. Crucible is 100% you — the interviewer stays off-camera and off-mic, leaving clean solo video of the real person." },
      { q: "Does Crucible correct eye contact or polish my appearance?", a: "No synthetic corrections. Crucible keeps a documentary-style authenticity — light processing that respects your voice and face." },
      { q: "How does pricing compare?", a: "Captions combines a subscription with per-credit consumption. Crucible is flat campaign plans: $49 Starter, $149 Pro, or $19 single credits." },
    ],
  },
  {
    slug: "veed",
    rivalName: "VEED",
    hubSlug: "social-video-apps",
    title: "Crucible vs VEED — Specialized system vs general editor | Crucible",
    description:
      "VEED is a general-purpose browser video editor. Crucible is a specialized pipeline that turns founder and consultant brain dumps into content.",
    pitch:
      "VEED is a massive, general-purpose browser-based video editor. Crucible is a highly specialized pipeline for turning founder and consultant brain dumps into content.",
    rows: [
      { dimension: "Core job", crucible: "Raw brain dump → a week of content", rival: "General timeline editing, dubbing & text-to-video" },
      { dimension: "AI interviewer", crucible: "Yes", rival: "No" },
      { dimension: "Editing model", crucible: "Narrative-aware cuts", rival: "Traditional multi-track browser timeline with AI tools" },
      { dimension: "Outputs", crucible: "Clips + carousels + deep dives + written posts", rival: "Video files and subtitles" },
      { dimension: "Pricing", crucible: "$49 Starter · $149 Pro", rival: "Lite $12–19/mo · Studio Pro $22–49/mo · Studio $39–59/mo" },
    ],
    differentiators: [
      { title: "Specialized vs generalist", body: "VEED gives you hundreds of scattered tools (screen recording, dubbing, background removal) but you assemble the video yourself. Crucible automatically builds the campaign for you." },
      { title: "Zero AI credit anxiety", body: "VEED's Pro tier strictly caps AI tools (e.g., 30,000 credits/year) and unused credits don't roll over. Crucible uses straightforward campaign credits." },
      { title: "Written content included", body: "VEED leaves you to write your own captions and posts. Crucible generates your LinkedIn posts and newsletters natively from the same recording." },
    ],
    faqs: [
      { q: "Is VEED a Crucible competitor?", a: "Only if you want a general-purpose editor. VEED is a great toolbox; Crucible automates the campaign pipeline end to end so you don't have to assemble anything." },
      { q: "Can I do manual edits in Crucible?", a: "Yes — text-based polishing: click any transcript word to cut it, approve or rewrite every draft, and send the video back for a re-cut." },
      { q: "Does Crucible do dubbing or translation?", a: "No — that's VEED's specialty. Crucible focuses on native content creation: your voice, your words, your week of output." },
    ],
  },
];

export function comparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function hubBySlug(slug: string): ComparisonHub | undefined {
  return comparisonHubs.find((h) => h.slug === slug);
}
