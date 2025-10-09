import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground py-16 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Imad Akbar</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-6">
              Director, Product – Digital Supply Chain
            </p>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <a 
                href="mailto:imad.akbar@hotmail.com" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={18} />
                imad.akbar@hotmail.com
              </a>
              <a 
                href="tel:+14246445085" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone size={18} />
                +1 (424) 644-5085
              </a>
              <a 
                href="http://www.imadakbar.info" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Globe size={18} />
                www.imadakbar.info
              </a>
              <span className="flex items-center gap-2">
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Summary</h2>
          <Card className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              Tenured product leader with proven record of driving innovation and transformative change 
              across major studios and post-production companies. Led the implementation of a custom media 
              asset management platform at Disney and consolidated 140+ petabytes of digital content, resulting 
              in the retirement of several legacy systems. Achieved $5M+ reduction in annual operating expense 
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Experience</h2>
          <div className="space-y-8">
            {/* Disney */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Director, Product – Digital Supply Chain</h3>
                <p className="text-accent font-medium mb-1">The Walt Disney Company</p>
                <p className="text-sm text-muted-foreground">March 2017 to Present</p>
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Founder</h3>
                <p className="text-accent font-medium mb-1">Localogic Media Services</p>
                <p className="text-sm text-muted-foreground">January 2016 to March 2018</p>
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Project Manager</h3>
                <p className="text-accent font-medium mb-1">OnPrem Solution Partners</p>
                <p className="text-sm text-muted-foreground">November 2015 to March 2017</p>
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Senior Technical Project Manager</h3>
                <p className="text-accent font-medium mb-1">Deluxe Media</p>
                <p className="text-sm text-muted-foreground">July 2014 to November 2015</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Implemented first-to-market UHD streaming solution for major telco using MPEG DASH packaged HEVC PlayReady protected content with DTS premium audio</li>
                <li>• Deluxe named "Best Digital Processing Solution" at the 2015 Technological Innovation Awards by Europe's SCTE™</li>
                <li>• Program Manager for Middle East telco project spanning content processing and marketing for IPTV/Mediaroom and OTT platforms</li>
                <li>• Managed multiple projects for IPTV and OTT content delivery for clients in the US, Canada, Middle East and APAC region</li>
              </ul>
            </Card>

            {/* Beachbody */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Senior Product Manager</h3>
                <p className="text-accent font-medium mb-1">Beachbody</p>
                <p className="text-sm text-muted-foreground">July 2013 to June 2014</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Completed implementation of ~$5 million custom Media Buy Management application for Direct Response Marketing</li>
                <li>• Employed Agile/Scrum methodology with usual scrum events in each sprint</li>
                <li>• Managed 8 onsite and 7 offshore resources as two separate Scrum teams with aligned sprints</li>
                <li>• Managed integration of custom application with Oracle EBS for invoicing</li>
              </ul>
            </Card>

            {/* CBS */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Project Manager</h3>
                <p className="text-accent font-medium mb-1">CBS Corporation</p>
                <p className="text-sm text-muted-foreground">June 2011 to July 2013</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Managed implementation of a Digital Asset Management solution with a budget of ~$1 million</li>
                <li>• Implemented secure Digital Distribution system leveraging Aspera integration with DAM system</li>
                <li>• Configured transcoding for videos using FFMPEG to convert to mobile or web friendly formats</li>
                <li>• Resource allocation and capacity planning, resource leveling across department</li>
              </ul>
            </Card>

            {/* Capgemini */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Project Manager</h3>
                <p className="text-accent font-medium mb-1">Capgemini Consulting</p>
                <p className="text-sm text-muted-foreground">March 2008 to June 2011</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• For Warner Bros., managed implementation of Aprimo Marketing Resource Management solution</li>
                <li>• Led team customizing/supporting .NET application with Crystal Reports, Oracle database, and Informatica ETL jobs</li>
                <li>• For Disney, performed Sr. Business Analyst role on custom .NET application for Theatrical Distribution</li>
                <li>• Subject matter expert for vendors, partners, and business users</li>
              </ul>
            </Card>

            {/* ESRI */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Programmer Analyst</h3>
                <p className="text-accent font-medium mb-1">ESRI</p>
                <p className="text-sm text-muted-foreground">June 2007 to March 2008</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Implemented product features in .NET stack coding in C++, C# and VB.NET</li>
                <li>• Tested the ArcGIS® suite of GIS tools and logged defects using bug tracking system</li>
                <li>• Held meetings with client representatives to review user needs and ascertain functional requirements</li>
              </ul>
            </Card>

            {/* USC */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Web Developer</h3>
                <p className="text-accent font-medium mb-1">University of Southern California</p>
                <p className="text-sm text-muted-foreground">August 2005 to May 2007</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Maintained and updated various department websites using Adobe Dreamweaver, Flash and Contribute</li>
                <li>• Front-end web programming in HTML, JavaScript, CSS</li>
                <li>• Application tier and database tier programming using Adobe ColdFusion and MS SQL Server 2005</li>
              </ul>
            </Card>

            {/* Teracent */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Software Development Internship</h3>
                <p className="text-accent font-medium mb-1">Teracent Corporation</p>
                <p className="text-sm text-muted-foreground">June 2006 to August 2006</p>
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Education</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-1">MS, Computer Science</h3>
              <p className="text-accent font-medium">University of Southern California</p>
              <p className="text-sm text-muted-foreground">2007</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-1">BS, Computer Science</h3>
              <p className="text-accent font-medium">Ghulam Ishaq Khan Institute</p>
              <p className="text-sm text-muted-foreground">2004</p>
            </Card>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Technologies & Skills</h2>
          <Card className="p-6">
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Certifications</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Project Management Professional (PMP)</h3>
              <p className="text-sm text-muted-foreground">2011</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Microsoft Certified Dynamics CRM Specialist</h3>
              <p className="text-sm text-muted-foreground">2009</p>
            </Card>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Recognition</h2>
          <Card className="p-6 bg-accent/5 border-accent/20">
            <p className="text-muted-foreground">
              For Imad's UHD content processing project at Deluxe Media, the company was named the 
              <span className="font-semibold text-foreground"> "Best Digital Processing Solution"</span> at 
              the 2015 Technological Innovation Awards by Europe's SCTE, the Society for Broadband Professionals.
            </p>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6 mt-16">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Imad Akbar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
