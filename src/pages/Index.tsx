import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              Available for New Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">Imad Akbar</h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-8 font-light">
              Director, Product – Digital Supply Chain
            </p>
            <div className="flex flex-wrap gap-4 text-sm md:text-base text-white/90">
              <a 
                href="mailto:imad.akbar@hotmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                <Mail size={18} />
                imad.akbar@hotmail.com
              </a>
              <a 
                href="tel:+14246445085" 
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone size={18} />
                +1 (424) 644-5085
              </a>
              <a 
                href="http://www.imadakbar.info" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                <Globe size={18} />
                www.imadakbar.info
              </a>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <MapPin size={18} />
                Porter Ranch, CA 91326
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-6 py-12">
        {/* Summary Section */}
        <section className="mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Summary</h2>
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-accent/20 bg-gradient-to-br from-white to-accent/5">
            <p className="text-foreground leading-relaxed text-lg">
              Tenured product leader with proven record of driving innovation and transformative change 
              across major studios and post-production companies. Led the implementation of a custom media 
              asset management platform at Disney and consolidated <span className="font-semibold text-primary">140+ petabytes</span> of digital content, resulting 
              in the retirement of several legacy systems. Achieved <span className="font-semibold text-primary">$5M+ reduction</span> in annual operating expense 
              by rolling out automated solutions for media QC, content transformation and fulfillment, and 
              forensic watermarking. Managed implementation and adoption of Interoperable Master Format (IMF) 
              support in the supply chain. Owned Business Intelligence strategy and implementation of ETL pipelines 
              and data visualization dashboards for tracking media. Strong technical background with deep domain 
              knowledge across content validation, DRM, transcoding, and video delivery. Proficient at defining 
              product vision, executable roadmaps, and aligning priorities and work across cross-functional teams.
            </p>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Experience</h2>
          <div className="space-y-6">
            {/* Disney */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary bg-gradient-to-r from-white to-primary/5">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-3">Current Role</div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Director, Product – Digital Supply Chain</h3>
                <p className="text-accent font-semibold text-lg mb-1">The Walt Disney Company</p>
                <p className="text-sm text-muted-foreground font-medium">March 2017 to Present</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lead Product team of 10+ individuals for portfolio of B2B and internal applications including Media Asset Management, QC, Transport, Media Processing, BI/Data Visualization, and Taxonomy Service</li>
                <li>• Define product vision and data driven roadmaps for several key applications in the digital supply chain supporting functions like mastering, localization, packaging, and distribution</li>
                <li>• Oversee intake, triage, and prioritization of business requirements from a global user base (~5,000 internal and external users), ensuring alignment with strategic objectives</li>
                <li>• Drive adoption and implementation of industry standards (e.g., IMF, Movielabs Digital Distribution Framework, BCP-47) to improve interoperability and supply chain efficiency</li>
                <li>• Owns strategy and implementation of data pipelines and business intelligence dashboards for content ingest and egress, quality control, watermarking, transcoding, and other enabling visibility and actionable insights; expert level proficiency in Domo Analytics platform</li>
                <li>• Product owner for AWS Baton deployment shared for media QC across the enterprise</li>
                <li>• Facilitate regular executive-level strategy meetings to define priorities, review timelines & risks, manage stakeholder expectations, and ensure cross-department coordination</li>
              </ul>
            </Card>

            {/* Localogic */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-secondary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Founder</h3>
                <p className="text-accent font-semibold text-lg mb-1">Localogic Media Services</p>
                <p className="text-sm text-muted-foreground font-medium">January 2016 to March 2018</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Founded media localization company offering subtitling, dubbing, and other localization services in several languages</li>
                <li>• Created efficient localization workflows harnessing cloud-native platforms for subtitling and task management</li>
                <li>• Established and rolled out all standard operating procedures for Operations department</li>
                <li>• Accountable for the timeliness and quality of all deliveries and led recurring status meetings with clients</li>
                <li>• Led business development activities globally and achieved positive cash flow in the first quarter</li>
                <li>• Created recruiting procedures and evaluation criteria for talent</li>
              </ul>
            </Card>

            {/* OnPrem */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-accent">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Project Manager</h3>
                <p className="text-accent font-semibold text-lg mb-1">OnPrem Solution Partners</p>
                <p className="text-sm text-muted-foreground font-medium">November 2015 to March 2017</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Implemented Business Process Management solution with Digital Asset Management capabilities for major comic book publisher</li>
                <li>• Accountable for scope, timeline, and budget for 2-year project with budget of ~$4 million</li>
                <li>• Managed current state analysis of business workflows and documented pain points</li>
                <li>• Documented functional and technical requirements and system integration architecture</li>
                <li>• Completed DAM Assessment project for major gaming studio</li>
              </ul>
            </Card>

            {/* Deluxe */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Senior Technical Project Manager</h3>
                <p className="text-accent font-semibold text-lg mb-1">Deluxe Media</p>
                <p className="text-sm text-muted-foreground font-medium">July 2014 to November 2015</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Implemented first-to-market UHD streaming solution for major telco using MPEG DASH packaged HEVC PlayReady protected content with DTS premium audio</li>
                <li>• Deluxe named "Best Digital Processing Solution" at the 2015 Technological Innovation Awards by Europe's SCTE™</li>
                <li>• Program Manager for Middle East telco project spanning content processing and marketing for IPTV/Mediaroom and OTT platforms</li>
                <li>• Managed multiple projects for IPTV and OTT content delivery for clients in the US, Canada, Middle East and APAC region</li>
              </ul>
            </Card>

            {/* Beachbody */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-secondary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Senior Product Manager</h3>
                <p className="text-accent font-semibold text-lg mb-1">Beachbody</p>
                <p className="text-sm text-muted-foreground font-medium">July 2013 to June 2014</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Completed implementation of ~$5 million custom Media Buy Management application for Direct Response Marketing</li>
                <li>• Employed Agile/Scrum methodology with usual scrum events in each sprint</li>
                <li>• Managed 8 onsite and 7 offshore resources as two separate Scrum teams with aligned sprints</li>
                <li>• Managed integration of custom application with Oracle EBS for invoicing</li>
              </ul>
            </Card>

            {/* CBS */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-accent">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Project Manager</h3>
                <p className="text-accent font-semibold text-lg mb-1">CBS Corporation</p>
                <p className="text-sm text-muted-foreground font-medium">June 2011 to July 2013</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Managed implementation of a Digital Asset Management solution with a budget of ~$1 million</li>
                <li>• Implemented secure Digital Distribution system leveraging Aspera integration with DAM system</li>
                <li>• Configured transcoding for videos using FFMPEG to convert to mobile or web friendly formats</li>
                <li>• Resource allocation and capacity planning, resource leveling across department</li>
              </ul>
            </Card>

            {/* Capgemini */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Project Manager</h3>
                <p className="text-accent font-semibold text-lg mb-1">Capgemini Consulting</p>
                <p className="text-sm text-muted-foreground font-medium">March 2008 to June 2011</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• For Warner Bros., managed implementation of Aprimo Marketing Resource Management solution</li>
                <li>• Led team customizing/supporting .NET application with Crystal Reports, Oracle database, and Informatica ETL jobs</li>
                <li>• For Disney, performed Sr. Business Analyst role on custom .NET application for Theatrical Distribution</li>
                <li>• Subject matter expert for vendors, partners, and business users</li>
              </ul>
            </Card>

            {/* ESRI */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-secondary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Programmer Analyst</h3>
                <p className="text-accent font-semibold text-lg mb-1">ESRI</p>
                <p className="text-sm text-muted-foreground font-medium">June 2007 to March 2008</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Implemented product features in .NET stack coding in C++, C# and VB.NET</li>
                <li>• Tested the ArcGIS® suite of GIS tools and logged defects using bug tracking system</li>
                <li>• Held meetings with client representatives to review user needs and ascertain functional requirements</li>
              </ul>
            </Card>

            {/* USC */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-accent">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Web Developer</h3>
                <p className="text-accent font-semibold text-lg mb-1">University of Southern California</p>
                <p className="text-sm text-muted-foreground font-medium">August 2005 to May 2007</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Maintained and updated various department websites using Adobe Dreamweaver, Flash and Contribute</li>
                <li>• Front-end web programming in HTML, JavaScript, CSS</li>
                <li>• Application tier and database tier programming using Adobe ColdFusion and MS SQL Server 2005</li>
              </ul>
            </Card>

            {/* Teracent */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Software Development Internship</h3>
                <p className="text-accent font-semibold text-lg mb-1">Teracent Corporation</p>
                <p className="text-sm text-muted-foreground font-medium">June 2006 to August 2006</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Developed web ads using HTML, JavaScript, CSS and Flash</li>
                <li>• Developed web accessible database driven Java applications using JSP and Java Servlets</li>
                <li>• Analyzed data about the Click Through Rate (CTR) of ads</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-xl transition-all bg-gradient-to-br from-secondary/5 to-white border-2 border-secondary/20">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">MS</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Master of Science</h3>
              <p className="text-accent font-semibold text-lg mb-1">Computer Science</p>
              <p className="text-muted-foreground font-medium">University of Southern California</p>
              <p className="text-sm text-muted-foreground mt-2">2007</p>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-white border-2 border-primary/20">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">BS</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Bachelor of Science</h3>
              <p className="text-accent font-semibold text-lg mb-1">Computer Science</p>
              <p className="text-muted-foreground font-medium">Ghulam Ishaq Khan Institute</p>
              <p className="text-sm text-muted-foreground mt-2">2004</p>
            </Card>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Technologies & Skills</h2>
          <Card className="p-8 bg-gradient-to-br from-white via-accent/5 to-primary/5 shadow-lg border-2 border-primary/10">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">PM Toolset</h3>
                <div className="flex flex-wrap gap-2">
                  {["Agile/Scrum", "Waterfall", "RUP", "Microsoft Project", "Clarity", "Primavera"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2 text-foreground">BPM & DAM</h3>
                <div className="flex flex-wrap gap-2">
                  {["OpenText Process Suite/Cordys", "OpenText Media Management", "MediaBeacon"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Languages & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "PL/SQL", "T-SQL", "C++", "C#/.NET", "ASP.NET", "jQuery", "JavaScript", "HTML", "CSS", "Java", "Grails", "Node.js"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL Server", "Oracle", "MySQL"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["JIRA", "JSON", "XML", "WordPress", "SharePoint", "Microsoft Dynamics CRM", "Adobe Photoshop", "Quality Center"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-xl transition-all bg-gradient-to-br from-primary/10 to-white border-2 border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl mb-4">
                📜
              </div>
              <h3 className="text-xl font-bold mb-1 text-foreground">Project Management Professional (PMP)</h3>
              <p className="text-muted-foreground font-medium">2011</p>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all bg-gradient-to-br from-secondary/10 to-white border-2 border-secondary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white text-2xl mb-4">
                📜
              </div>
              <h3 className="text-xl font-bold mb-1 text-foreground">Microsoft Certified Dynamics CRM Specialist</h3>
              <p className="text-muted-foreground font-medium">2009</p>
            </Card>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Recognition</h2>
          <Card className="p-8 bg-gradient-to-br from-accent to-primary shadow-2xl border-0 text-white">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                🏆
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">"Best Digital Processing Solution"</h3>
                <p className="text-white/95 leading-relaxed text-lg">
                  For Imad's UHD content processing project at Deluxe Media, the company was named the 
                  Best Digital Processing Solution at the 2015 Technological Innovation Awards by Europe's SCTE, 
                  the Society for Broadband Professionals.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-6 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-95"></div>
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <p className="text-white/90 font-medium">
            © {new Date().getFullYear()} Imad Akbar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
