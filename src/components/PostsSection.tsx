import React, { useEffect } from "react";
import "./PostsSection.css"; // Custom CSS for Masonry

const PostsSection: React.FC = () => {
  useEffect(() => {
    // Load Facebook SDK only once
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Load Twitter Widgets only once
    if ((window as any).twttr) {
      (window as any).twttr.widgets.load();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // All embeds in one place
  const embeds: string[] = [
    `<div class="fb-video" data-href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907" data-show-text="true"></div>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FKONFEDERACJA2019%2Fposts%2Fpfbid02Fed1pbGiFiCdqKJYrPEurtbMbAjg9oY6yqt7SLQ4u63hS6544gjK288TBgJPi7dMl&show_text=true&width=500" width="100%" height="668" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgrzegorz.michal.braun%2Fposts%2Fpfbid02go82JkUex1fnv8XBrnTU2uxu7uUTPaGVC4YdutsaWeJbgqaRYDKMciwGNr3DQTQgl&show_text=true&width=500" width="100%" height="699" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>`,
    `<div class="fb-video" data-href="https://www.facebook.com/WlodzimierzSkalik/videos/405294525335835" data-show-text="true"></div>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/photo/?fbid=1025671582897900&set=a.173225041475896&width=500" width="100%" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>`,
    `<div class="fb-post" data-href="https://www.facebook.com/photo/?fbid=1000088314809493&set=a.329001731918158"></div>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWlodzimierzSkalik%2Fposts%2Fpfbid03374afxgtBc9X5JtcnZmh5QRYfDL6PNJrJdfPZmfDnnY27KaKQVPh4Pm9TKA2hEfil&show_text=true&width=500" width="100%" height="654" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>`,
    `<blockquote class="twitter-tweet"><p lang="pl" dir="ltr">‼️Co UKRADNĄ Polakowi... <a href="https://twitter.com/Wlodek_Skalik/status/1796488800736305293">May 31, 2024</a></blockquote>`,
    `<blockquote class="twitter-tweet"><p lang="pl" dir="ltr">Czyżby Donald Tusk... <a href="https://twitter.com/Wlodek_Skalik/status/1785307032855134298">April 30, 2024</a></blockquote>`,
    `<blockquote class="twitter-tweet"><p lang="pl" dir="ltr">‼️UDOSTĘPNIJ‼️ Jeśli ważny... <a href="https://twitter.com/Wlodek_Skalik/status/1799054311890293217">June 7, 2024</a></blockquote>`
  ];

  return (
    <div className="masonry xl:pt-20 pt-10 2xl:mx-10 mx-5">
      {embeds.map((embed, idx) => (
        <div
          key={idx}
          className="masonry-item border-[6px] rounded-xl"
          style={{ borderColor: "#00FF9C" }}
          dangerouslySetInnerHTML={{ __html: embed }}
        />
      ))}
    </div>
  );
};

export default PostsSection;
