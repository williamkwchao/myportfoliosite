import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://gloify.com/wp-content/uploads/2019/05/Untitled-design-16.jpg) center / cover",
              }}
            >
              React Native Project #1
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://gloify.com/wp-content/uploads/2019/05/Untitled-design-16.jpg) center / cover",
              }}
            >
              React Native Project #2
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://gloify.com/wp-content/uploads/2019/05/Untitled-design-16.jpg) center / cover",
              }}
            >
              React Native Project #3
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://i1.wp.com/www.techcoffees.com/wp-content/uploads/2018/02/bootstrap-wallpaper.png?fit=1366%2C768&ssl=1) center / cover",
              }}
            >
              Bootstrap Project #1
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://i1.wp.com/www.techcoffees.com/wp-content/uploads/2018/02/bootstrap-wallpaper.png?fit=1366%2C768&ssl=1) center / cover",
              }}
            >
              Bootstrap Project #2
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://i1.wp.com/www.techcoffees.com/wp-content/uploads/2018/02/bootstrap-wallpaper.png?fit=1366%2C768&ssl=1) center / cover",
              }}
            >
              Bootstrap Project #3
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://ml7a1cnkmo5m.i.optimole.com/6IH-QQ-zCN84owO/w:650/h:433/q:auto/https://www.dev-cafe.org/wp-content/uploads/2018/08/python-logo-3.6.gif) center / cover",
              }}
            >
              Python Project #1
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://ml7a1cnkmo5m.i.optimole.com/6IH-QQ-zCN84owO/w:650/h:433/q:auto/https://www.dev-cafe.org/wp-content/uploads/2018/08/python-logo-3.6.gif) center / cover",
              }}
            >
              Python Project #2
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176 px",
                background:
                  "url(https://ml7a1cnkmo5m.i.optimole.com/6IH-QQ-zCN84owO/w:650/h:433/q:auto/https://www.dev-cafe.org/wp-content/uploads/2018/08/python-logo-3.6.gif) center / cover",
              }}
            >
              Python Project #3
            </CardTitle>
            <CardText>This is dummy text.</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>React Native</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
