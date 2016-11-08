require 'test_helper'

class ProjectsControllerTest < ActionDispatch::IntegrationTest
  test "should get thissite" do
    get projects_thissite_url
    assert_response :success
  end

  test "should get network" do
    get projects_network_url
    assert_response :success
  end

  test "should get clock" do
    get projects_clock_url
    assert_response :success
  end

  test "should get news" do
    get projects_news_url
    assert_response :success
  end

end
