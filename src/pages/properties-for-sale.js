import React from "react"
import TabsContainerComponent from "../components/tabscontainer"
import LayoutComponent from "../components/layout"
import TitleComponent from "../components/title"
import { css } from "@emotion/core"
import ContactUsComponent from "../components/contactus"
import HigherOrderPropertyComponent from "../components/HOC/properties-setup"

const PropertiesForRent = () => {
  return (
    <LayoutComponent>
      <div style={{ marginTop: "6%" }}></div>
      <div style={{ textAlign: "center" }}>
        <TitleComponent title="Properties For Sale in UAE" />
      </div>
      <br />
      <div css={main}>
        <TabsContainerComponent
          labelone="Property For Sale One"
          contentone={
            <HigherOrderPropertyComponent hetchfour="Property For Sale One">
              <div>
                <span>
                  This is definitely one of the best location for investment
                  purpose in Dubai.Bahia Residence is the latest release in the
                  larger Acacia Avenues development located between Sheikh Zayed
                  Road and Beach Road just east of Media and Internet cities.
                  The larger development is truly an outstanding investment
                  opportunity as it is the only large scale development of its
                  kind on Jumeirah land. With exceptionally limited supply and a
                  massive demand for units in the area, this surely is an
                  investor's choice. Minimalistic yet feature-filled, the villas
                  and apartments of Acacia Avenues herald the arrival of
                  contemporary urban living in Dubai. Inspired by chic,
                  landscaped urban spaces, the architecture combines
                  contemporary modes with regional cues to create a definitive
                  living environment.
                  <br />
                  <br />
                  <h1 style={{ fontSize: "22px", color: "black" }}>Amenities:</h1>
                  <br />
                  <ul>
                    <li>Vast Open Spaces</li>
                    <li>Ready to MoveIn Properties</li>
                    <li>Easy Commute</li>
                  </ul>
                  <br />
                  <br />
                  Claren Towers are incredibly popular for many reasons,
                  including their stylish modern finish throughout, that sets
                  them apart from the usual Emaar styles in Downtown. As well as
                  this, the towers are located in an area that cannot be
                  compromised by construction in the area, meaning what you see
                  is what you get. This is a good investment opportunity for
                  those looking to invest in a unique and special apartment
                  offering a strong net return on investments.
                </span>
              </div>
            </HigherOrderPropertyComponent>
          }
          contenttwo={<HigherOrderPropertyComponent hetchfour="Property For Sale Two">
          <div>
            <span>
              This is definitely one of the best location for investment
              purpose in Dubai.Bahia Residence is the latest release in the
              larger Acacia Avenues development located between Sheikh Zayed
              Road and Beach Road just east of Media and Internet cities.
              The larger development is truly an outstanding investment
              opportunity as it is the only large scale development of its
              kind on Jumeirah land. With exceptionally limited supply and a
              massive demand for units in the area, this surely is an
              investor's choice. Minimalistic yet feature-filled, the villas
              and apartments of Acacia Avenues herald the arrival of
              contemporary urban living in Dubai. Inspired by chic,
              landscaped urban spaces, the architecture combines
              contemporary modes with regional cues to create a definitive
              living environment.
              <br />
              <br />
              <h1 style={{ fontSize: "22px", color: "black" }}>Amenities:</h1>
              <br />
              <ul>
                <li>Vast Open Spaces</li>
                <li>Ready to MoveIn Properties</li>
                <li>Easy Commute</li>
              </ul>
              <br />
              <br />
              Claren Towers are incredibly popular for many reasons,
              including their stylish modern finish throughout, that sets
              them apart from the usual Emaar styles in Downtown. As well as
              this, the towers are located in an area that cannot be
              compromised by construction in the area, meaning what you see
              is what you get. This is a good investment opportunity for
              those looking to invest in a unique and special apartment
              offering a strong net return on investments.
            </span>
          </div>
        </HigherOrderPropertyComponent> }
          labeltwo="Properties For Sale Two"
          labelthree="Properties For Sale Three"
          contentthree={<HigherOrderPropertyComponent hetchfour="Properties For Sale Three">
              <div>
                <span>
                  This is definitely one of the best location for investment
                  purpose in Dubai.Bahia Residence is the latest release in the
                  larger Acacia Avenues development located between Sheikh Zayed
                  Road and Beach Road just east of Media and Internet cities.
                  The larger development is truly an outstanding investment
                  opportunity as it is the only large scale development of its
                  kind on Jumeirah land. With exceptionally limited supply and a
                  massive demand for units in the area, this surely is an
                  investor's choice. Minimalistic yet feature-filled, the villas
                  and apartments of Acacia Avenues herald the arrival of
                  contemporary urban living in Dubai. Inspired by chic,
                  landscaped urban spaces, the architecture combines
                  contemporary modes with regional cues to create a definitive
                  living environment.
                  <br />
                  <br />
                  <h1 style={{ fontSize: "22px", color: "black" }}>Amenities:</h1>
                  <br />
                  <ul>
                    <li>Vast Open Spaces</li>
                    <li>Ready to MoveIn Properties</li>
                    <li>Easy Commute</li>
                  </ul>
                  <br />
                  <br />
                  Claren Towers are incredibly popular for many reasons,
                  including their stylish modern finish throughout, that sets
                  them apart from the usual Emaar styles in Downtown. As well as
                  this, the towers are located in an area that cannot be
                  compromised by construction in the area, meaning what you see
                  is what you get. This is a good investment opportunity for
                  those looking to invest in a unique and special apartment
                  offering a strong net return on investments.
                </span>
              </div>
            </HigherOrderPropertyComponent>}
          labelfour="Properties For Sale Four"
          contentfour={<HigherOrderPropertyComponent hetchfour="Properties For Sale Four">
              <div>
                <span>
                  This is definitely one of the best location for investment
                  purpose in Dubai.Bahia Residence is the latest release in the
                  larger Acacia Avenues development located between Sheikh Zayed
                  Road and Beach Road just east of Media and Internet cities.
                  The larger development is truly an outstanding investment
                  opportunity as it is the only large scale development of its
                  kind on Jumeirah land. With exceptionally limited supply and a
                  massive demand for units in the area, this surely is an
                  investor's choice. Minimalistic yet feature-filled, the villas
                  and apartments of Acacia Avenues herald the arrival of
                  contemporary urban living in Dubai. Inspired by chic,
                  landscaped urban spaces, the architecture combines
                  contemporary modes with regional cues to create a definitive
                  living environment.
                  <br />
                  <br />
                  <h1 style={{ fontSize: "22px", color: "black" }}>Amenities:</h1>
                  <br />
                  <ul>
                    <li>Vast Open Spaces</li>
                    <li>Ready to MoveIn Properties</li>
                    <li>Easy Commute</li>
                  </ul>
                  <br />
                  <br />
                  Claren Towers are incredibly popular for many reasons,
                  including their stylish modern finish throughout, that sets
                  them apart from the usual Emaar styles in Downtown. As well as
                  this, the towers are located in an area that cannot be
                  compromised by construction in the area, meaning what you see
                  is what you get. This is a good investment opportunity for
                  those looking to invest in a unique and special apartment
                  offering a strong net return on investments.
                </span>
              </div>
            </HigherOrderPropertyComponent>}
          labelfive="Properties For Sale Five"
          contentfive={<HigherOrderPropertyComponent hetchfour="Properties For Sale Five">
              <div>
                <span>
                  This is definitely one of the best location for investment
                  purpose in Dubai.Bahia Residence is the latest release in the
                  larger Acacia Avenues development located between Sheikh Zayed
                  Road and Beach Road just east of Media and Internet cities.
                  The larger development is truly an outstanding investment
                  opportunity as it is the only large scale development of its
                  kind on Jumeirah land. With exceptionally limited supply and a
                  massive demand for units in the area, this surely is an
                  investor's choice. Minimalistic yet feature-filled, the villas
                  and apartments of Acacia Avenues herald the arrival of
                  contemporary urban living in Dubai. Inspired by chic,
                  landscaped urban spaces, the architecture combines
                  contemporary modes with regional cues to create a definitive
                  living environment.
                  <br />
                  <br />
                  <h1 style={{ fontSize: "22px", color: "black" }}>Amenities:</h1>
                  <br />
                  <ul>
                    <li>Vast Open Spaces</li>
                    <li>Ready to MoveIn Properties</li>
                    <li>Easy Commute</li>
                  </ul>
                  <br />
                  <br />
                  Claren Towers are incredibly popular for many reasons,
                  including their stylish modern finish throughout, that sets
                  them apart from the usual Emaar styles in Downtown. As well as
                  this, the towers are located in an area that cannot be
                  compromised by construction in the area, meaning what you see
                  is what you get. This is a good investment opportunity for
                  those looking to invest in a unique and special apartment
                  offering a strong net return on investments.
                </span>
              </div>
            </HigherOrderPropertyComponent>}
          labelsix="Properties For Sale Six"
          contentsix={<HigherOrderPropertyComponent hetchfour="Properties For Sale Six">
              <div>
                <span>
                  This is definitely one of the best location for investment
                  purpose in Dubai.Bahia Residence is the latest release in the
                  larger Acacia Avenues development located between Sheikh Zayed
                  Road and Beach Road just east of Media and Internet cities.
                  The larger development is truly an outstanding investment
                  opportunity as it is the only large scale development of its
                  kind on Jumeirah land. With exceptionally limited supply and a
                  massive demand for units in the area, this surely is an
                  investor's choice. Minimalistic yet feature-filled, the villas
                  and apartments of Acacia Avenues herald the arrival of
                  contemporary urban living in Dubai. Inspired by chic,
                  landscaped urban spaces, the architecture combines
                  contemporary modes with regional cues to create a definitive
                  living environment.
                  <br />
                  <br />
                  <h1 style={{ fontSize: "22px", color: "black" }}>Amenities:</h1>
                  <br />
                  <ul>
                    <li>Vast Open Spaces</li>
                    <li>Ready to MoveIn Properties</li>
                    <li>Easy Commute</li>
                  </ul>
                  <br />
                  <br />
                  Claren Towers are incredibly popular for many reasons,
                  including their stylish modern finish throughout, that sets
                  them apart from the usual Emaar styles in Downtown. As well as
                  this, the towers are located in an area that cannot be
                  compromised by construction in the area, meaning what you see
                  is what you get. This is a good investment opportunity for
                  those looking to invest in a unique and special apartment
                  offering a strong net return on investments.
                </span>
              </div>
            </HigherOrderPropertyComponent>}
          labelseven="Properties For Sale Seven"
          contentseven={<HigherOrderPropertyComponent hetchfour="Properties For Sale Seven">
              <div>
                <span>
                  This is definitely one of the best location for investment
                  purpose in Dubai.Bahia Residence is the latest release in the
                  larger Acacia Avenues development located between Sheikh Zayed
                  Road and Beach Road just east of Media and Internet cities.
                  The larger development is truly an outstanding investment
                  opportunity as it is the only large scale development of its
                  kind on Jumeirah land. With exceptionally limited supply and a
                  massive demand for units in the area, this surely is an
                  investor's choice. Minimalistic yet feature-filled, the villas
                  and apartments of Acacia Avenues herald the arrival of
                  contemporary urban living in Dubai. Inspired by chic,
                  landscaped urban spaces, the architecture combines
                  contemporary modes with regional cues to create a definitive
                  living environment.
                  <br />
                  <br />
                  <h1 style={{ fontSize: "22px", color: "black" }}>Amenities:</h1>
                  <br />
                  <ul>
                    <li>Vast Open Spaces</li>
                    <li>Ready to MoveIn Properties</li>
                    <li>Easy Commute</li>
                  </ul>
                  <br />
                  <br />
                  Claren Towers are incredibly popular for many reasons,
                  including their stylish modern finish throughout, that sets
                  them apart from the usual Emaar styles in Downtown. As well as
                  this, the towers are located in an area that cannot be
                  compromised by construction in the area, meaning what you see
                  is what you get. This is a good investment opportunity for
                  those looking to invest in a unique and special apartment
                  offering a strong net return on investments.
                </span>
              </div>
            </HigherOrderPropertyComponent>}
        />
      </div>
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default PropertiesForRent

const main = css`
  margin: 2px 5%;
`