#version 330 core
out vec4 FragColor;

// inputs the color from the vertex shader
in vec3 color;

// inputs the texture coordinates from the vertex shader
in vec2 texCoord;

// Gets the Texture Unit from the main function
uniform sampler2D tex0;

//imgui window color test
uniform vec4 ImGuiColor;

void main()
{
    FragColor = texture(tex0, texCoord)*vec4(ImGuiColor);
}