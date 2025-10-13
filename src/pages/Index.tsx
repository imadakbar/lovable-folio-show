import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const Index = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        opacity: 0,
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#8B5CF6",
        },
        links: {
          color: "#8B5CF6",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none" as const,
          random: false,
          straight: false,
          outModes: {
            default: "bounce" as const,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}
      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-saira text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              Imad <span className="gradient-text">Akbar</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Porter Ranch, CA 91326</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(424) 644-5085</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:imad.akbar@hotmail.com" className="hover:text-primary transition-colors">
                  imad.akbar@hotmail.com
                </a>
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
              I design and manage the implementation of enterprise scale web and mobile applications 
              in the media and entertainment industry. I also founded and ultimately sold a company 
              that provided media localization services in several languages.
            </p>

            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/imad-akbar-6600457/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform shadow-elegant"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-saira text-4xl md:text-5xl font-bold mb-12 gradient-text">Experience</h2>
        
        <div className="space-y-8">
          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Director - Product Management</h3>
                  <p className="text-primary font-semibold mb-2">Disney Media and Entertainment Distribution (DMED)</p>
                </div>
                <Badge variant="secondary" className="shrink-0">March 2017 - Present</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I lead DMED's Asset Management Product team - we manage relationships with several business units that leverage our asset management and transport applications. I lead recurring meetings with business leadership across the enterprise to define strategy, prioritize development activities, create roadmaps, review timelines and risks, and manage expectations. I was formerly the Product Owner for Disney Studios' enterprise-wide Digital Asset Management system.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Chief Technology Officer</h3>
                  <p className="text-primary font-semibold mb-2">Limegreen.Media</p>
                </div>
                <Badge variant="secondary" className="shrink-0">August 2018 - August 2019</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I lead our media services division. I establish standard operating procedures for our various work streams and also build products in the areas of media processing, localization, video streaming, and digital asset management. Additionally, we offer consulting services in the media and entertainment space.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Founder</h3>
                  <p className="text-primary font-semibold mb-2">Localogic Media Services</p>
                </div>
                <Badge variant="secondary" className="shrink-0">March 2015 - March 2018</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Localogic uses cutting edge web based platforms to provide subtitling, translation, and dubbing services in several languages. With lean workflows incorporating both automated and manual QC, we localize content for several major streaming services at a fraction of the cost of other providers.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Project Manager</h3>
                  <p className="text-primary font-semibold mb-2">OnPrem Solution Partners</p>
                </div>
                <Badge variant="secondary" className="shrink-0">November 2015 - March 2017</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I managed the implementation of a solution integrating Business Process Management (Cordys) and Digital Asset Management (OpenText Media Management) capabilities. Prior to implementation, our project team conducted a thorough gap analysis, comprehensively modeled the current state, and designed the recommended future state. On a separate engagement, I performed an asset management assessment and presented findings for a major game studio.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Sr Technical Project Manager</h3>
                  <p className="text-primary font-semibold mb-2">Deluxe Media</p>
                </div>
                <Badge variant="secondary" className="shrink-0">June 2014 - November 2015</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I managed several projects around the acquisition and QC, transcoding, packaging, and delivery of content to streaming services and broadcasters worldwide. The content was processed and delivered to a wide variety of platforms - web, iOS, Android, XBOX, Roku, smart TVs, tvOS (Apple TV), set top boxes, and other TVOD and SVOD platforms. I worked with several DRM and packaging standards - PlayReady, Widevine, FairPlay, Smooth Streaming, HLS, Mpeg DASH, and others.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Senior Product Manager</h3>
                  <p className="text-primary font-semibold mb-2">Beachbody</p>
                </div>
                <Badge variant="secondary" className="shrink-0">July 2013 - June 2014</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Product Owner for a custom application managing the end to end direct response marketing process. This including planning, configuring and executing media buys, ingesting and analyzing response data, and robust reporting. The application was integrated with several other apps via an Enterprise Service Bus.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Project Manager</h3>
                  <p className="text-primary font-semibold mb-2">CBS Corporation</p>
                </div>
                <Badge variant="secondary" className="shrink-0">June 2011 - July 2013</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Managed and supported the implementation of multiple DAM systems. This included a custom system used to distribute marketing assets to local and international partners and an off the shelf product (MediaBeacon) used as a repository for assets of all types across multiple company divisions.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Sr Business Analyst</h3>
                  <p className="text-primary font-semibold mb-2">Capgemini Consulting</p>
                </div>
                <Badge variant="secondary" className="shrink-0">March 2008 - June 2011</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                For a major film studio, I managed the implementation and support of the Marketing Resource Management application (Aprimo MRM) that tracked marketing spend on all channels for theatrical and home video titles. On a separate project, I served as a techno-functional BA on an implementation of a theatrical distribution system. This application managed the end to end theatrical distribution process from release planning, bookings and distribution through invoicing and reconciliation and reporting against box office receipts.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">Programmer Analyst</h3>
                  <p className="text-primary font-semibold mb-2">Environmental Systems Research Institute</p>
                </div>
                <Badge variant="secondary" className="shrink-0">June 2007 - March 2008</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I worked as a .NET developer on ESRI's flagship ArcGIS family of products. I implemented a number of features in the ArcMAP application and worked closely with the QA team to write and execute test plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-saira text-4xl md:text-5xl font-bold mb-12 gradient-text">Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="font-saira text-2xl font-bold mb-6 text-foreground">Functional Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Digital Asset Management and Delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Media Localization - Subtitles, Closed Captions, Dubbing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Media Transcoding, Packaging, DRM and Distribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Multi-Platform Video Streaming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Business Process Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Direct Response Marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Marketing Resources Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Theatrical Distribution</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="font-saira text-2xl font-bold mb-6 text-foreground">Product and Program Toolset</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Engagement Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Requirements Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">System Gap Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Process Mapping and Re-engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Current State Modeling and Future State Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">PM Tools: Microsoft Project, Clarity, Primavera, Jira, Smartsheet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Methodology: Agile/Scrum, Kanban, Waterfall, Rational Unified Process</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="font-saira text-2xl font-bold mb-6 text-foreground">Languages and Tools</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-base">HTML5</Badge>
                <Badge variant="outline" className="text-base">CSS3</Badge>
                <Badge variant="outline" className="text-base">JavaScript</Badge>
                <Badge variant="outline" className="text-base">React</Badge>
                <Badge variant="outline" className="text-base">Jira</Badge>
                <Badge variant="outline" className="text-base">Trello</Badge>
                <Badge variant="outline" className="text-base">Chrome DevTools</Badge>
                <Badge variant="outline" className="text-base">Google Analytics</Badge>
                <Badge variant="outline" className="text-base">SQL Databases</Badge>
                <Badge variant="outline" className="text-base">MongoDB</Badge>
                <Badge variant="outline" className="text-base">AWS</Badge>
                <Badge variant="outline" className="text-base">NPM</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="font-saira text-4xl md:text-5xl font-bold mb-12 gradient-text">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20 bg-card/50 backdrop-blur hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-saira text-2xl font-bold mb-2 text-foreground">University of Southern California</h3>
              <p className="text-primary font-semibold mb-2">MS - Computer Science</p>
              <Badge variant="secondary">August 2005 - May 2007</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-saira text-2xl font-bold mb-2 text-foreground">Ghulam Ishaq Khan Institute</h3>
              <p className="text-primary font-semibold mb-2">BS - Computer Science</p>
              <Badge variant="secondary">August 2000 - May 2004</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="container mx-auto px-6 py-16 pb-24">
        <h2 className="font-saira text-4xl md:text-5xl font-bold mb-12 gradient-text">Awards & Certifications</h2>
        
        <Card className="border-primary/20 bg-card/50 backdrop-blur">
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <div className="flex-1">
                  <p className="text-muted-foreground">
                    UHD Processing/Streaming Project <a href="http://www.prnewswire.com/news-releases/deluxe-ondemand-4k-uhd-awarded-best-digital-processing-solution-by-scte-300111384.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">awarded "Best Digital Processing Solution"</a> by Europe's SCTE - 2015
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <div className="flex-1">
                  <p className="text-muted-foreground">PMI's Project Management Professional (PMP) Certification - 2011</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <div className="flex-1">
                  <p className="text-muted-foreground">Microsoft Certified Dynamics CRM Specialist - 2009</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <div className="flex-1">
                  <p className="text-muted-foreground">Academic scholarships through undergrad and graduate studies</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
